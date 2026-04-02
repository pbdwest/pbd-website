import imgShape1 from "figma:asset/98821f964f84d9b3aaa269b181e8e821ace81088.png";

export default function Section() {
  return (
    <div className="bg-gradient-to-b from-[#111642] relative size-full to-[#2b38a8]" data-name="section">
      <div className="absolute h-[416.547px] left-0 top-0 w-[1339px]" data-name="div" style={{ backgroundImage: "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 1339 416.55\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -24.993 -107.12 0 267.8 208.27)\\'><stop stop-color=\\'rgba(234,21,40,0.06)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(0,0,0,0)\\' offset=\\'0.7\\'/></radialGradient></defs></svg>')" }} />
      <div className="absolute h-[831px] left-0 top-0 w-[1339px]" data-name="shape 1">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgShape1} />
      </div>
    </div>
  );
}