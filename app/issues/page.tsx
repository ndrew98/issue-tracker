import React from "react";
import { Button } from "@radix-ui/themes";
import Link from "next/link";

const Issue = () => {
  return (
    <div className="flex">
      <h1>Issue Page</h1>
      <Button>
        <Link href="/issues/new">New Issue</Link>
      </Button>
    </div>
  );
};

export default Issue;
