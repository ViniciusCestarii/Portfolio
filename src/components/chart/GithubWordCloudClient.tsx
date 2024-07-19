'use client'
import React, { useCallback, useEffect, useMemo, useRef } from 'react'
import * as echarts from 'echarts'
import 'echarts-wordcloud'
import { useTheme } from '@mui/material'
import hexToRgba from '@/utils/theme/hexToRgba'
import { DictionaryProps } from '@/dictionaries/getDictionary'

interface GithubWordCloudClientProps extends DictionaryProps {
  data: { name: string; value: number }[]
}

const GithubWordCloudClient = ({ data, dict }: GithubWordCloudClientProps) => {
  const { githubWordCloud } = dict.section.knowledge

  const chartRef = useRef(null)
  const echartRef = useRef<echarts.ECharts>()
  const theme = useTheme()

  const generateRandomColor = useCallback(() => {
    const color = theme.palette.primary.main

    const rgbaColor = hexToRgba(color, 1)

    const [r, g, b, a] = (rgbaColor?.match(/\d+/g) ?? [0, 0, 0, 1]).map(Number)

    const randomR = Math.min(255, r + Math.floor(Math.random() * 50))
    const randomG = Math.min(255, g + Math.floor(Math.random() * 50))
    const randomB = Math.min(255, b + Math.floor(Math.random() * 50))

    const randomColor = `rgba(${randomR}, ${randomG}, ${randomB}, ${a})`

    return randomColor
  }, [theme.palette.primary.main])

  const option: echarts.EChartsCoreOption = useMemo(
    () => ({
      tooltip: {
        formatter: githubWordCloud.tooltipFormat,
      },
      aria: {
        show: true,
      },
      title: {
        text: githubWordCloud.title,
        subtext: githubWordCloud.description,
        top: 10,
        left: 10,
      },
      legend: {
        orient: 'vertical',
        right: 10,
        top: 'center',
      },
      toolbox: {
        feature: {
          saveAsImage: {},
        },
      },
      backgroundColor: hexToRgba(theme.palette.primary.main, 0.1),
      media: [
        {
          query: {
            maxWidth: 600,
          },
          option: {
            tooltip: {
              formatter: '{b}: {c}',
            },
            series: [
              {
                sizeRange: [7, 16],
              },
            ],
          },
        },
      ],
      series: [
        {
          type: 'wordCloud',
          sizeRange: [12, 22],
          rotationRange: [0, 0],
          gridSize: 0,
          drawOutOfBound: false,
          layoutAnimation: true,
          keepAspect: true,
          textStyle: {
            fontWeight: 'bold',
            color: generateRandomColor,
          },
          emphasis: {
            textStyle: {
              color: theme.palette.primary.dark,
            },
          },
          data: data.toSorted(function (a, b) {
            return b.value - a.value
          }),
        },
      ],
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [theme.palette.primary.main],
  )

  useEffect(() => {
    const myChart = echarts.init(chartRef.current, 'dark', {
      renderer: 'svg',
      locale: dict.lang,
    })

    const maskImage = new Image()

    maskImage.src = '/logo.svg'

    maskImage.onload = function () {
      ;(option.series as any)[0].maskImage = maskImage
      myChart.setOption(option)
    }

    myChart.setOption(option)

    echartRef.current = myChart

    window.onresize = function () {
      myChart.resize()
    }

    return () => {
      myChart.dispose()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    if (!echartRef.current) return

    echartRef.current.setOption(option)
  }, [option])

  return (
    <div role="img" ref={chartRef} style={{ height: '600px', width: '100%' }} />
  )
}

export default GithubWordCloudClient
