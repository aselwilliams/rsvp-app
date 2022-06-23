import Guest from "./Guest";

const GuestsList = ({
  list,
  handleChange,
  handleEdit,
  handleCount,
  isEditing,
  handleUpdate,
  editId,
  handleDelete,
}) => {
  return (
    <section className="list">
      {list.map((guest) => {
        return (
          <Guest
            guest={guest}
            key={guest.id}
            handleChange={handleChange}
            handleEdit={handleEdit}
            handleCount={handleCount}
            isEditing={isEditing}
            handleUpdate={handleUpdate}
            editId={editId}
            handleDelete={handleDelete}
          />
        );
      })}
    </section>
  );
};
export default GuestsList;
