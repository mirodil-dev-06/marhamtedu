const Stat = ({ value, label }) => (
  <div className="bg-white/70 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-2xl p-6 shadow-sm text-center">
    <div className="text-3xl md:text-4xl font-extrabold text-[#3f9cfb]">{value}</div>
    <div className="text-sm md:text-base text-muted-foreground mt-1 text-[#ffffff]">{label}</div>
  </div>
);
const Banner = () => {
  return (
   <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Stat value="12+" label="Faol kurslar" />
            <Stat value="25+" label="Ustoz va mentor" />
            <Stat value="15+" label="Hamkor maktablar" />
            <Stat value="30%" label="Grant/chegirmalar" />
          </div>
        </div>
      </section>
  )
}

export default Banner