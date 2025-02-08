type LineChartProps = {
    data: number[];
    className?: string;
  };
  
  export default function LineChart({ data, className }: LineChartProps) {
    if (!data || data.length < 2) return null; // Ensure there are at least two points
  
    const width = 100;
    const height = 36;
    const padding = 5;
  
    // Determine line color based on the last two values
    const lastValue = data[data.length - 1];
    const secondLastValue = data[data.length - 2];
  
    let lineColor = "#FFFFFF"; // Default (white)
    if (lastValue > secondLastValue) lineColor = "#6EDC86"; // Green (rising)
    else if (lastValue < secondLastValue) lineColor = "#FF3B3B"; // Red (falling)
  
    // Find min & max for scaling
    const minValue = Math.min(...data);
    const maxValue = Math.max(...data);
  
    // Scale functions to fit points into the SVG area
    const scaleX = (index: number) => (index / (data.length - 1)) * (width - padding * 2) + padding;
    const scaleY = (value: number) =>
      height - ((value - minValue) / (maxValue - minValue)) * (height - padding * 2) - padding;
  
    // Generate path data
    const pathD = data
      .map((value, index) => `${index === 0 ? "M" : "L"} ${scaleX(index)},${scaleY(value)}`)
      .join(" ");
  
    return (
      <svg width={width} height={height} className={className} viewBox={`0 0 ${width} ${height}`}>
        <path d={pathD} fill="none" stroke={lineColor} strokeWidth="2" />
      </svg>
    );
  }
  