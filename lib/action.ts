"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import dbConnect from "./database/connect";
import Task from "./database/task.model";

export async function getTasks() {
  await dbConnect();

  try {
    const tasks = await Task.find({}).lean();
    // Convert MongoDB objects to plain serializable objects
    return tasks.map(task => ({
      ...task,
      _id: task._id.toString(),
    }));
  } catch (err) {
    console.log(err);
  }
}

export async function createTask(params: {
  title: string;
  description: string;
  status: string;
}) {
  await dbConnect();

  const { title, description, status } = params;

  try {
    await Task.create({ title, description, status });
    revalidatePath("/");
  } catch (err) {
    console.log(err);
  }
  
  redirect("/");
}

export async function deleteTask(taskId: string) {
  await dbConnect();

  try {
    await Task.findByIdAndDelete(taskId);
    revalidatePath("/");
    return { success: true };
  } catch (err) {
    console.log(err);
    return { success: false };
  }
}
