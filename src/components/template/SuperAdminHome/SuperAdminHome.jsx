import CustomCard from "@/components/organisms/CustomCard/CustomCard";
import React from "react";
import user from "../../../assets/svg/user_icon.svg";
import { Link } from "react-router-dom";
import { Building2 } from "lucide-react";
import CustomIcon from "@/components/atoms/CustomTitleIcon/CustomIcon";
import { useQuery } from "@tanstack/react-query";
import { schoolAllQuery, } from "@/query";

export default function SuperAdminHome() {
  const { data, isLoading } = useQuery({ ...schoolAllQuery() });
  const ollSchools = data?.data?.data;



  return (
    <div>
      <CustomIcon
        icon={Building2}
        title={"System Admin Dashboard"}
        titlesize={30}
      />
      <div className="flex justify-center gap-5 flex-wrap  ">
        {ollSchools?.map((item) => (
          <Link key={item.id} className="w-full max-w-[450px]">
            <CustomCard
              BadgeVariants={String(item.status)}
              Badgeboolean={true}
              avatarFallback={item.countryCode}
              title={String(item.name)}
              established={item.establishedYear}
              // students={2220}
              // teachers={500}
              // admins={5}
              // classes={44}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
