import { useImage } from "../../hooks/useImage";
import user from "../../assets/user.png";
function Cast({ item }) {
  const profilePath = useImage(item?.profile_path, user);

  return (
    <div>
      <img
        className="w-36 h-36 m-auto object-cover rounded-full"
        src={profilePath}
        alt={item?.name}
      />
      <h3 className="text-center text-md font-semibold text-red-600">
        {item?.name}
      </h3>
      <p className="text-sm text-center">{item?.character}</p>
    </div>
  );
}

export default Cast;
