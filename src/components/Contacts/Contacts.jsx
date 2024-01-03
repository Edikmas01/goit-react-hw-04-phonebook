export const Contacts = ({ contacts, onDelete }) => {
  return (
    <>
      <ul>
        {contacts.map(({ name, number, id }) => (
          <li key={id}>
            {' '}
            {name}: {number}
            <button
              style={{
                color: 'red',
                margin: 5,
              }}
              className="contact-btn"
              onClick={() => onDelete(id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

