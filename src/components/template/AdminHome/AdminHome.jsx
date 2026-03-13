import CustomIcon from "@/components/atoms/CustomTitleIcon/CustomIcon";
import CustomCard from "@/components/organisms/CustomCard/CustomCard";
import { userMeQuery } from "@/query";
import { useQuery } from "@tanstack/react-query";
import { Users } from "lucide-react";
import React from "react";
import { Link, useSearchParams } from "react-router-dom";
import { initialValues } from "./data";

export default function AdminHome() {
    const [searchParams, setSearchParams] = useSearchParams(initialValues);
    const { data } = useQuery({ ...userMeQuery(initialValues) });
    const schoolData = data?.data?.data || [];

    console.log(schoolData);
    return (
        <div>
            <CustomIcon
                icon={Users}
                title={"Admin Dashboard"}
                titlesize={30}
                iconsize={20}
            />
            <Link>
                <CustomCard
                    // isLoading={isLoading}
                    BadgeVariants="active"
                    Badgeboolean={false}
                    deta={"30-september"}
                    // src={user}
                    title={"lorem"}
                    mkClass={"Grade 10A"}
                    abents={2}
                    late={1}
                />
            </Link>
        </div> /////bhhjjhhjhjjjjjjj
    );
}
