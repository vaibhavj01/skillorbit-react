export default function OrbitBackdrop({ variant = "sky" }) {
  return (
    <div className={`so-backdrop so-backdrop--${variant}`} aria-hidden="true">
      {variant === "sky" && (
        <>
          <div className="so-backdrop__stars" />
          <div className="so-backdrop__nebula so-backdrop__nebula--lime" />
          <div className="so-backdrop__nebula so-backdrop__nebula--cyan" />
          <div className="so-backdrop__ring so-backdrop__ring--lg" />
          <div className="so-backdrop__ring so-backdrop__ring--md" />
          <div className="so-backdrop__ring so-backdrop__ring--sm" />
        </>
      )}

      {variant === "mesh" && (
        <>
          <div className="so-backdrop__grid" />
          <div className="so-backdrop__nebula so-backdrop__nebula--lime so-backdrop__nebula--soft" />
          <div className="so-backdrop__ring so-backdrop__ring--lg so-backdrop__ring--center" />
          <div className="so-backdrop__ring so-backdrop__ring--md so-backdrop__ring--center" />
        </>
      )}

      {variant === "night" && (
        <>
          <div className="so-backdrop__stars so-backdrop__stars--sparse" />
          <div className="so-backdrop__hairline" />
          <div className="so-backdrop__nebula so-backdrop__nebula--teal" />
          <div className="so-backdrop__nebula so-backdrop__nebula--lime so-backdrop__nebula--soft" />
        </>
      )}

      {variant === "mint" && (
        <div className="so-backdrop__wash" />
      )}
    </div>
  );
}
