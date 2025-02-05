import Image from 'next/image';

export default function Home() {
  return (
    <section className="text-center mt-8">
      <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
      <p className="mt-4 text-lg">I'm a passionate developer specializing in web applications and software engineering.</p>
      <Image
        src="/images/profile.jpg"
        alt="Profile Picture"
        width={1080}
        height={1000}
        className="rounded-full mx-auto mt-4"
      />
      
    </section>
  );
}