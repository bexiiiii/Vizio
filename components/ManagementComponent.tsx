"use client";

import DatabaseWithRestApi from "@/components/ui/database-with-rest-api";

export const ManagementComponent = () => {
  return (
    <div className="p-4 rounded-xl bg-accent/20 w-full">
      <h2 className="text-3xl font-semibold mb-6 text-center text-blue-700">
        Управляйте контентом с одного ПО
      </h2>

      <div className="flex items-center gap-6">
        <div className="flex-1">
          <DatabaseWithRestApi />
        </div>
        <p className="flex-1">
          Легко управляйте своим контентом и данными с помощью нашего интуитивно понятного интерфейса.
        </p>
      </div>
    </div>
  );
};
