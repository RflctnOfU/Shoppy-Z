import Nav from "../ui/nav";
export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center gap-4  bg-gradient-to-br from-main-border to-main-secondary p-4 ">
      <Nav />
      <div className=" text-main-tertiary">Shoppy-Z &copy; 2023</div>
    </footer>
  );
}
