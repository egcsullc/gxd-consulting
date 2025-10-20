export default function Stat({ value, label }: { value: string, label: string }){
  return (
    <div className="rounded-2xl border p-6 text-center">
      <div className="text-3xl font-semibold tracking-tight">{value}</div>
      <div className="opacity-70 mt-1 text-sm">{label}</div>
    </div>
  )
}
