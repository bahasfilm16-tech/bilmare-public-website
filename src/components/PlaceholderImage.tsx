import React from 'react'

interface PlaceholderImageProps {
  src: string
  alt: string
  className?: string
  overlayLabel?: string
  overlayTitle?: string
  style?: React.CSSProperties
}

export function PlaceholderImage({
  src,
  alt,
  className = '',
  overlayLabel,
  overlayTitle,
  style,
}: PlaceholderImageProps) {
  return (
    <div className={`photo-frame ${className}`} style={style}>
      <img
        src={src}
        alt={alt}
        onError={(e) => {
          const target = e.currentTarget
          target.style.display = 'none'
          const parent = target.parentElement
          if (parent && !parent.querySelector('.photo-placeholder-inner')) {
            const placeholder = document.createElement('div')
            placeholder.className = 'photo-placeholder-inner'
            placeholder.style.cssText = `
              width: 100%; height: 100%; min-height: 280px;
              background: linear-gradient(135deg, #0b2d4e 0%, #051c2c 100%);
              display: flex; align-items: center; justify-content: center;
              flex-direction: column; gap: 12px;
            `
            placeholder.innerHTML = `
              <div style="width:48px;height:2px;background:#2251ff;margin-bottom:8px;"></div>
              <span style="font-family:Georgia,serif;font-size:13px;color:rgba(255,255,255,0.35);letter-spacing:0.1em;text-transform:uppercase;">Foto akan diganti</span>
              <span style="font-family:Inter,sans-serif;font-size:11px;color:rgba(255,255,255,0.2);">${src}</span>
            `
            parent.appendChild(placeholder)
          }
        }}
      />
      {(overlayLabel || overlayTitle) && (
        <div className="photo-caption">
          {overlayLabel && <div className="photo-caption-label">{overlayLabel}</div>}
          {overlayTitle && <div className="photo-caption-title">{overlayTitle}</div>}
        </div>
      )}
    </div>
  )
}
