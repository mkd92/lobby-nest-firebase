import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { selectUser } from "../../app/authSlice/authSlice";
import { useAppSelector } from "../../app/hooks";

const Dashboard = () => {
  const user = useAppSelector(selectUser);
  const router = useRouter();
  useEffect(() => {
    if (!user) router.push("/");
  }, []);
  return <div>Welcome to Dashboard</div>;
};
export default Dashboard;
