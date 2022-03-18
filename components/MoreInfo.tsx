import Image from "next/image";

export default function MoreInfo() {
  return (
    <div
      id="moreinfo"
      className="bg-bgdark text-slate-300 max-w-2xl m-32 p-6 rounded-xl shadow-md hover:shadow-xl flex flex-row"
    >
      <div className="bg-white h-12 w-12"></div>

      <p className="font-sans antialiased text-lg font-semibold text-left">
        I am{" "}
        <span className="underline decoration-sky-500">Kunal Dandekar</span>, a
        student studying Computer Science. I can write code in multiple
        languages such as{" "}
        <span className="underline decoration-sky-700 ">Typescript</span>,{" "}
        <span className="underline decoration-amber-300">Python</span> and{" "}
        <span className="underline decoration-purple-500">Kotlin</span>, just to
        name a few. Having worked on group projects and having worked as a
        freelancer, I have a lot of knowledge when it comes to handeling
        programming projects. I am the most proefficient with{" "}
        <span>ReactJS</span>. Currently learning Rust and also in the process of
        learning how to make minecraft mods for the Fabric modloader
      </p>
    </div>
  );
}
