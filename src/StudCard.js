function StudCard({ name, text, num }) {
  return (
    <>
      <hr />
      <div className="name">{num}</div>
      <div className="name">{name}</div>
      <div className="card">{text}</div>
      <hr />
    </>
  )
}

export default StudCard
