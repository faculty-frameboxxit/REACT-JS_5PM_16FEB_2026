function UserProfile({ name, role, avatar }) {
  return (
    <div>
      <img src={avatar} alt={name} width="50" />
      <h4>{name}</h4>
      <p>{role}</p>
    </div>
  );
}
export default UserProfile;