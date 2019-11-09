import React from 'react'

const Logo = props => (
  <svg
    width={435.268}
    height={122.021}
    viewBox="32.366 13.989 435.268 122.021"
    style={{
      background: '#596886',
    }}
    preserveAspectRatio="xMidYMid"
    {...props}
  >
    <defs>
      <filter
        id="prefix__editing-hover"
        x="-100%"
        y="-100%"
        width="300%"
        height="300%"
      >
        <feFlood floodColor="#052b4a" result="flood" />
        <feComposite
          operator="in"
          in2="SourceAlpha"
          in="flood"
          result="shadow"
        />
        <feOffset dx={-4} dy={-4} in="SourceGraphic" result="offset-1" />
        <feOffset dx={4} dy={4} in="shadow" result="offset-2" />
        <feMerge>
          <feMergeNode in="offset-2" />
          <feMergeNode in="offset-1" />
        </feMerge>
      </filter>
    </defs>
    <g filter="url(#prefix__editing-hover)">
      <path
        d="M140.335 76.133q0 27.26-29.56 27.26-4.74 0-12.55-1.15l7.17-37.82q.51-2.56.83-4.03 9.73-.71 14.05-.71t8.29.9q3.97.89 6.59 2.88 5.18 3.9 5.18 12.67zm-13.18-2.37q0-9.53-6.85-9.53h-.64q-.32 0-.64.06l-6.59 34.37q.26.13.51.13h.51q2.37 0 4.84-1.48 2.46-1.47 4.38-4.48 4.48-6.97 4.48-19.07zm35.58 6.47q.9-2.37.9-4.42 0-3.78-3.07-3.78-1.6 0-2.91 1.44-1.32 1.44-1.32 3.24 0 1.28 1.03 2.3 1.47 1.41 5.25 3.71 3.77 2.31 5.21 4.19 1.44 1.89 1.44 4.48 0 2.6-1.25 4.96-1.24 2.37-3.48 4.04-4.8 3.58-12.48 3.58-4.16 0-7.36-2.18-3.2-2.11-3.2-4.6 0-2.5 1.82-3.97 1.82-1.47 4.51-1.47 2.69 0 4.35 1.02-.83 2.11-.83 3.52 0 4.22 3.59 4.22 1.53 0 2.56-.96 1.02-.96 1.02-2.62 0-3.26-5.5-6.72-4.48-2.94-5.51-4.1-1.73-2.04-1.73-4.6 0-2.56 1.22-5 1.22-2.43 3.46-4.16 4.67-3.58 12.8-3.58 4.16 0 6.62 1.66 2.46 1.67 2.46 4.48 0 2.82-1.69 4.42-1.7 1.6-4.77 1.6-2.11 0-3.14-.7zm14.76 20.54q-1.51-1.66-2.18-4.29-.67-2.62-.67-6.91t1.47-8.19q1.47-3.91 4.16-6.72 5.5-5.89 14.59-5.89 3.27 0 5.63 1.09l10.95-1.09-4.74 24.96q-.19.77-.19 2.18 0 1.4.86 2.3.87.9 2.15 1.02-.64 2.18-2.98 3.46-2.33 1.28-4.96 1.28-2.62 0-4.38-.99-1.76-.99-2.27-2.66-1.03 1.6-3.2 2.63-2.18 1.02-5.09 1.02-2.91 0-5.28-.77t-3.87-2.43zm13.5-25.98q-.74 1.15-1.38 3.1-.64 1.95-1.69 7.17-1.06 5.21-1.06 8.93 0 3.71.58 4.8.57 1.08 1.6 1.08 2.05 0 3.55-1.95t2.08-5.41l3.39-18.75q-1.34-1.15-2.91-1.15t-2.5.51q-.92.51-1.66 1.67zm44.26 20.67q-3.33 3.45-9.41 3.45-7.62 0-9.22-5.56-.51-1.67-.51-3.52 0-1.86.38-3.78l3.01-16 12.99-1.28-3.52 18.62q-.12.84-.32 1.73-.19.9-.19 1.83 0 .92.32 1.53t.77.99q.77.52 2.14.52 1.38 0 2.56-1.67 1.19-1.66 1.76-4.54l3.52-17.73 12.61-1.28-4.8 25.15q-2.37 12.29-7.23 17.15-2.5 2.5-5.73 3.49-3.23.99-7.39.99-6.72 0-10.56-2.11-3.84-2.11-3.84-5.63 0-2.62 1.98-4.13 1.99-1.5 5.06-1.5 2.69 0 4.74 1.15 1.21.7 1.79 1.6-1.47 1.28-1.47 3.39 0 2.82 2.56 2.82 4.22 0 6.65-9.73.71-2.88 1.35-5.95zm39.74 4.54q-3.07 3.97-10.69 3.97-3.97 0-6.85-2.4-2.88-2.4-2.88-5.86 0-1.92.2-2.88l4.28-22.78 13-1.28-4.68 24.7q-.25 1.41-.25 2.24 0 3.72 2.24 3.72 2.49 0 4.29-3.4.57-1.08.83-2.49l4.54-23.49 12.61-1.28-4.74 24.96q-.19.96-.19 1.98 0 1.03.58 2.15.57 1.12 2.43 1.37-.38 1.54-1.73 2.56-2.81 2.18-5.85 2.18-3.04 0-4.84-1.09-1.79-1.09-2.3-2.88zm47.17 3.97q-7.75 0-7.75-6.02.07-1.66.58-4.48l1.15-5.88q1.73-8.32 1.73-10.18 0-3.71-2.18-3.71-3.64 0-5.56 9.53l-3.78 19.46-12.86 1.28 6.65-33.98 10.5-1.22-1.03 6.27q3.01-6.27 12.23-6.27 4.48 0 6.37 1.89 1.88 1.89 1.88 6.11 0 3.97-2.04 13.25-.96 4.16-.96 5.73 0 1.56.86 2.46.86.9 2.14 1.02-.64 2.18-2.84 3.46-2.21 1.28-5.09 1.28zm27.01 0q-14.08 0-14.08-13.25 0-9.41 5.18-15.49 5.5-6.46 15.04-6.46 6.91 0 10.43 3.2 3.52 3.2 3.52 9.92 0 10.24-5.5 16.19-5.38 5.89-14.59 5.89zm1.66-27.84q-.77 1.73-1.38 4.32-.6 2.59-1.37 6.69-.77 4.09-.77 9.15 0 1.66.54 2.75.55 1.09 2.02 1.09t2.4-.7q.93-.71 1.63-2.37 1.28-2.95 2.31-8.42 1.02-5.47 1.12-7.84.09-2.37.09-4.13 0-1.76-.51-2.91-.51-1.15-1.95-1.15t-2.4.9q-.96.89-1.73 2.62zm41.34 4.1q.9-2.37.9-4.42 0-3.78-3.07-3.78-1.6 0-2.91 1.44-1.32 1.44-1.32 3.24 0 1.28 1.03 2.3 1.47 1.41 5.25 3.71 3.77 2.31 5.21 4.19 1.44 1.89 1.44 4.48 0 2.6-1.25 4.96-1.24 2.37-3.48 4.04-4.8 3.58-12.48 3.58-4.16 0-7.36-2.18-3.2-2.11-3.2-4.6 0-2.5 1.82-3.97 1.82-1.47 4.51-1.47 2.69 0 4.35 1.02-.83 2.11-.83 3.52 0 4.22 3.59 4.22 1.53 0 2.56-.96 1.02-.96 1.02-2.62 0-3.26-5.5-6.72-4.48-2.94-5.51-4.1-1.73-2.04-1.73-4.6 0-2.56 1.22-5 1.22-2.43 3.46-4.16 4.67-3.58 12.8-3.58 4.16 0 6.62 1.66 2.46 1.67 2.46 4.48 0 2.82-1.69 4.42-1.7 1.6-4.77 1.6-2.11 0-3.14-.7z"
        fill="#ffd5af"
      />
    </g>
    <style />
  </svg>
)

export default Logo
