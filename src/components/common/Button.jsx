const Button = ({ icon = null, label, color = 'primary', outline = false, ...className }) => {
  return (
    <div
      className={`flex items-center justify-center px-3 py-2 gap-2 rounded font-bold ${
        !outline
          ? `text-white cursor-pointer bg-${color}`
          : `text-primary cursor-pointer bg-white border-primary border-[1px]`
      } ${className}`}>
      {icon && <span class='material-icons-outlined'>{icon}</span>}
      {label}
    </div>
  )
}

export default Button
