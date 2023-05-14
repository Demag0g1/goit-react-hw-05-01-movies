const Cast = ({ cast }) => {
  return (
    <ul>
      {cast.map(person => (
        <li key={person.id}>{person.name}</li>
      ))}
    </ul>
  );
};

export default Cast;
