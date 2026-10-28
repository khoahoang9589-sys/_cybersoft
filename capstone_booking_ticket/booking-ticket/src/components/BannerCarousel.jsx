import { useEffect, useState } from 'react'

export default function BannerCarousel({ banners }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const bannerCount = banners.length

  useEffect(() => {
    const timer = setInterval(() => setActiveIndex((index) => (index + 1) % bannerCount), 4500)
    return () => clearInterval(timer)
  }, [bannerCount])

  const goTo = (index) => setActiveIndex((index + bannerCount) % bannerCount)
  const activeBanner = banners[activeIndex]

  return <section aria-label="Banner phim nổi bật" className="banner-carousel">
    <img src={activeBanner.hinhAnh} alt={`Banner phim ${activeBanner.maPhim}`} />
    <button aria-label="Banner trước" className="carousel-control carousel-control--previous" onClick={() => goTo(activeIndex - 1)}>‹</button>
    <button aria-label="Banner tiếp theo" className="carousel-control carousel-control--next" onClick={() => goTo(activeIndex + 1)}>›</button>
    <div className="carousel-dots" role="tablist" aria-label="Chọn banner">
      {banners.map((banner, index) => <button aria-label={`Hiển thị banner ${index + 1}`} aria-selected={index === activeIndex} className={index === activeIndex ? 'carousel-dot carousel-dot--active' : 'carousel-dot'} key={banner.maBanner} onClick={() => goTo(index)} role="tab" />)}
    </div>
  </section>
}
