import useAuth from "../../../Hooks/useAuth";

const UserHome = () => {
    const { user } = useAuth();
    return (
        <div>
            <h2 className="text-3xl font-semibold">
                <span>Hi Wellcome </span>
                {
                    user?.displayName ? user.displayName : "Back"
                }!
            </h2>
        </div>
    );
};

export default UserHome;