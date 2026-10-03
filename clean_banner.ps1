Add-Type -AssemblyName System.Drawing

$inputPath = "C:\Users\Administrator\.gemini\antigravity-ide\brain\340e53c6-a7d3-43cf-9655-4a80e0ce199b\.user_uploaded\media_1790814977423.png"
$outputPath = "c:\Users\Administrator\Pictures\web application\assets\images\better-products-banner.png"
$rawOutputPath = "c:\Users\Administrator\Pictures\web application\assets\images\better-products-banner-raw.png"

# First, copy raw image as backup
Copy-Item -Path $inputPath -Destination $rawOutputPath -Force
Write-Host "Raw banner copied to: $rawOutputPath"

# Now create cleaned version
$img = [System.Drawing.Bitmap]::FromFile($inputPath)

$cx = 975
$cy = 359
$r = 45 # Covers WhatsApp icon (radius 27) + its drop shadow / glow
$bgColor = [System.Drawing.Color]::FromArgb(251, 244, 232)

for ($y = [Math]::Max(0, $cy - $r); $y -lt [Math]::Min($img.Height, $cy + $r + 1); $y++) {
    for ($x = [Math]::Max(0, $cx - $r); $x -lt [Math]::Min($img.Width, $cx + $r + 1); $x++) {
        $dx = $x - $cx
        $dy = $y - $cy
        if (($dx * $dx + $dy * $dy) -le ($r * $r)) {
            $img.SetPixel($x, $y, $bgColor)
        }
    }
}

# Fix right edge 3px whitish browser margin
for ($y = 0; $y -lt $img.Height; $y++) {
    for ($x = 1021; $x -lt $img.Width; $x++) {
        $img.SetPixel($x, $y, $bgColor)
    }
}

$img.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
$img.Dispose()

Write-Host "Cleaned banner saved successfully to: $outputPath"
