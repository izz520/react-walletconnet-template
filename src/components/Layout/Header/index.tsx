import Language from "./Language"
import User from "./User"

const Header = () => {
  return (
    <div className="w-full h-16 bg-gray-50 flex justify-between items-center px-10">
      <div className="text-2xl font-bold">LOGO</div>
      <div className="flex items-center gap-4">
        <Language />
        <User />
      </div>
    </div>
  )
}

export default Header