import CustomCard from "@/components/organisms/CustomCard/CustomCard";
import React from "react";
import user from "../../../assets/svg/user_icon.svg";
import { Link } from "react-router-dom";
import { Building2 } from "lucide-react";
import CustomIcon from "@/components/atoms/CustomIcon/CustomIcon";

export default function SuperAdminHome() {
  return (
    <div>
      <CustomIcon icon={Building2} title={"System Admin Dashboard"} titlesize={30}/> 
      <Link>
        <CustomCard
          BadgeVariants="active"
          Badgeboolean={true}
          src={user}
          title={"lorem"}
          Established={2001}
          students={2220}
          teachers={500}
          admins={5}
          classes={44}
        />
      </Link>
    </div>
  );
}
