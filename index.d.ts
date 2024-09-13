declare module "p-ccr" {
  interface ProcessConcurrencyOptions<T> {
    // List of items to process
    items: T[];
    // Asynchronous function to process each item
    func: (item: T, index: number) => Promise<void>;
    // Maximum number of tasks to run concurrently (default is 1)
    concurrency?: number;
  }

  /**
   * Processes items concurrently by limiting the number of simultaneous async tasks.
   *
   * @param options - Configuration options for processing concurrency.
   * @returns A Promise that resolves when all tasks are completed.
   */
  export function processConcurrency<T>(
    options: ProcessConcurrencyOptions<T>
  ): Promise<void>;
}
