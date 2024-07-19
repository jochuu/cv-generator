export default function CV({ personal }) {
  const { name, email, phone, address } = personal;
  return (
    <div className='cv-container'>
      <div className='cv-personal-section'>
        <h3 className='cv-name'>{name}</h3>
        <div className='cv-email'>{email}</div>
        <div className='cv-phone'>{phone}</div>
        <div className='cv-address'>{address}</div>
      </div>
    </div>
  );
}
