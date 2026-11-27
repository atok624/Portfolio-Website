Add-Type -AssemblyName System.Drawing
$iconDirectory = [IO.Path]::GetFullPath((Join-Path $PSScriptRoot '../public/icons'))

foreach ($dimension in @(192, 512)) {
    $bitmap = New-Object System.Drawing.Bitmap($dimension, $dimension)
    $graphics = [System.Drawing.Graphics]::FromImage($bitmap)
    $pen = New-Object System.Drawing.Pen([System.Drawing.ColorTranslator]::FromHtml('#b7f34a'), 24)
    try {
        $graphics.Clear([System.Drawing.ColorTranslator]::FromHtml('#0b0d0c'))
        $graphics.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
        $graphics.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
        $scale = $dimension / 512.0
        $graphics.ScaleTransform($scale, $scale)
        $pen.StartCap = [System.Drawing.Drawing2D.LineCap]::Square
        $pen.EndCap = [System.Drawing.Drawing2D.LineCap]::Square
        $pen.LineJoin = [System.Drawing.Drawing2D.LineJoin]::Round
        $letterN = [System.Drawing.PointF[]]@(
            [System.Drawing.PointF]::new(144, 326), [System.Drawing.PointF]::new(144, 186),
            [System.Drawing.PointF]::new(236, 326), [System.Drawing.PointF]::new(236, 186)
        )
        $letterA = [System.Drawing.PointF[]]@(
            [System.Drawing.PointF]::new(274, 326), [System.Drawing.PointF]::new(323, 186),
            [System.Drawing.PointF]::new(372, 326)
        )
        $graphics.DrawLines($pen, $letterN)
        $graphics.DrawLines($pen, $letterA)
        $graphics.DrawLine($pen, 296, 272, 350, 272)
        $bitmap.Save((Join-Path $iconDirectory ('icon-' + $dimension + '.png')), [System.Drawing.Imaging.ImageFormat]::Png)
        if ($dimension -eq 512) {
            $bitmap.Save((Join-Path $iconDirectory 'maskable-512.png'), [System.Drawing.Imaging.ImageFormat]::Png)
        }
        if ($bitmap.GetPixel(0, 0).ToArgb() -ne [System.Drawing.ColorTranslator]::FromHtml('#0b0d0c').ToArgb()) {
            throw 'Unexpected icon background'
        }
        if ($bitmap.GetPixel([int](144 * $scale), [int](240 * $scale)).G -lt 200) {
            throw 'Monogram artwork is missing'
        }
        Write-Output ('Verified ' + $dimension + 'px NA icon')
    }
    finally {
        $pen.Dispose()
        $graphics.Dispose()
        $bitmap.Dispose()
    }
}
