import '../styles/style.css';

export function SkeletonLoader() {
  return (
    <div role="status" className="skeleton-loader">
        <div className="skeleton-line-wide"></div>
        <div className="widget-content">
          <div className="skeleton-badge"></div>
          <div className="widget-content-info">
              <div className="skeleton-line-medium"></div>
              <div className="skeleton-line"></div>
              <div className="skeleton-line-narrow"></div>
              <div className="skeleton-line-thin"></div>
          </div>
          <span className="skeleton-sr-only">Loading...</span>
        </div>
    </div>
  );
}