export const getCurrentUser = async () => {
    const user = localStorage.getItem("role");
    if (!user) return null;
    return JSON.parse(user);
};
