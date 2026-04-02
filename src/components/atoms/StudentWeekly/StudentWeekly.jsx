const statusConfig = {
    PRESENT: {
        color: "#22c55e",
        bg: "bg-[rgba(34,197,94,0.12)]",
        border: "border-[rgba(34,197,94,0.3)]",
        label: "Present",
    },
    LATE: {
        color: "#f59e0b",
        bg: "bg-[rgba(245,158,11,0.12)]",
        border: "border-[rgba(245,158,11,0.3)]",
        label: "Late",
    },
    ABSENT: {
        color: "#ef4444",
        bg: "bg-[rgba(239,68,68,0.12)]",
        border: "border-[rgba(239,68,68,0.3)]",
        label: "Absence",
    },
};

const formatDay = (dayOfWeek) => {
    const map = {
        MONDAY: "Mon",
        TUESDAY: "Tue",
        WEDNESDAY: "Wed",
        THURSDAY: "Thu",
        FRIDAY: "Fri",
        SATURDAY: "Sat",
        SUNDAY: "Sun",
    };
    return map[dayOfWeek] || dayOfWeek;
};

export default function StudentWeekly({ weeklyDays = [] }) {
    if (!weeklyDays.length) {
        return (
            <p className="text-[#aaa] text-center">
                No information available
            </p>
        );
    }

    return (
        <div className="rounded-[16px] px-[20px] py-[20px] sm:px-[28px] sm:py-[24px]">
            <div className="flex justify-between items-center mb-5">
                <div className="flex items-center gap-2">
                    <span className="text-lg">📅</span>
                    <span className="text-textColor font-semibold text-sm sm:text-base">
                        Weekly Attendance
                    </span>
                </div>
            </div>
            <div
                className="grid gap-2 sm:gap-3 mb-2"
                style={{ gridTemplateColumns: `repeat(${weeklyDays.length}, 1fr)` }}
            >
                {weeklyDays.map(({ date, dayOfWeek }) => (
                    <div
                        key={date}
                        className="text-center text-[#ccc] font-semibold text-xs sm:text-sm"
                    >
                        {formatDay(dayOfWeek)}
                    </div>
                ))}
            </div>
            <div
                className="grid gap-2 sm:gap-3"
                style={{ gridTemplateColumns: `repeat(${weeklyDays.length}, 1fr)` }}
            >
                {weeklyDays.map(({ date, status, reasonName }) => {
                    const cfg = statusConfig[status] || statusConfig.ABSENT;
                    return (
                        <div
                            key={date}
                            title={reasonName || ""}
                            className={`flex flex-col items-center gap-2 sm:gap-3 
              ${cfg.bg} ${cfg.border} border rounded-xl 
              py-4 px-2 sm:py-5`}
                        >
                            <div
                                className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full"
                                style={{
                                    background: cfg.color,
                                    boxShadow: `0 0 8px ${cfg.color}`,
                                }}
                            />
                            <span className="text-textColor text-[11px] sm:text-xs font-semibold text-center">
                                {cfg.label}
                            </span>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}