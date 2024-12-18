import React from "react";
import { Sidebar } from "./_components/sidebar";
import { cn } from "@/lib/utils";
import { Navbar } from "./_components/navbar";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <div className="h-[80px] md:pl-56 fixed inset-y-0 w-full">
        <Navbar />
      </div>
      <div className="hidden md:flex h-full w-56 flex-col fixed inset-y-0 z-50">
        <Sidebar />
      </div>
      <div className={cn("md:pl-56 h-full pt-[80px]")}>{children}</div>
    </div>
  );
};

export default DashboardLayout;
