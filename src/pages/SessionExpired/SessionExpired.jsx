export default function SessionExpired() {
  return (
    <section>
      <div className="container">
        <div className="h-screen flex flex-col items-center justify-center">
          <h2 className="text-red-500 text-2xl font-bold">
            Your sesion has been expired
          </h2>
          <p className="mt-1">
            Contact for new link at : <strong>support@loyalopinion.com</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
