import React from 'react'
import {
  EmailIcon,
  TrafficIcon,
  PointOfSaleIcon,
  PersonAddIcon,
  DownloadOutlinedIcon,
} from '../data/icons'
import { tokens } from '../theme'
import { useTheme, IconButton } from '@mui/material'
import Stats from '../components/Stats'
import Header from '../components/Header'
import LineChart from '../components/LineChart'
import Transaction from '../components/Transaction'
import PieChart from '../components/PieChart'
import BarChart from '../components/BarChart'
import GeoChart from '../components/GeoChart'

export default function Dashboard() {
  const theme = useTheme()
  const colors = tokens(theme.palette.mode)
  return (
    <div className="m-6 h-full flex flex-col">
      <Header
        title="Dashboard"
        subtitle="Welcome to your dashboard"
      />
      <div className="flex flex-wrap justify-between gap-4 mt-6">
        <Stats
          icon={<EmailIcon />}
          stat="12,361"
          statLabel="Emails Sent"
          statChange="+14%"
        />
        <Stats
          icon={<PersonAddIcon />}
          stat="12,361"
          statLabel="Emails Sent"
          statChange="+14%"
        />
        <Stats
          icon={<PointOfSaleIcon />}
          stat="12,361"
          statLabel="Emails Sent"
          statChange="+14%"
        />
        <Stats
          icon={<TrafficIcon />}
          stat="12,361"
          statLabel="Emails Sent"
          statChange="+14%"
        />
      </div>
      <div className="grid gap-4 grid-cols-3 mt-4">
        <div
          className="p-6 pb-12 max-h-[300px] col-span-2"
          style={{ backgroundColor: colors.primary[400] }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p
                className="text-base font-bold"
                style={{ color: colors.grey[100] }}
              >
                Revenue Generated
              </p>
              <p
                className="text-2xl font-bold"
                style={{ color: colors.greenAccent[400] }}
              >
                $59,342.32
              </p>
            </div>
            <IconButton>
              <DownloadOutlinedIcon
                sx={{
                  color: colors.greenAccent[400],
                  fontSize: 26,
                }}
              />
            </IconButton>
          </div>
          <div className="h-full ">
            <LineChart isDashboard={true} />
          </div>
        </div>
        <div className="max-h-[300px] overflow-y-auto flex flex-col gap-1 col-span-1">
          <div style={{ backgroundColor: colors.primary[400] }}>
            <p
              className="text-base font-bold p-4 "
              style={{ color: colors.grey[100] }}
            >
              Recent Transactions
            </p>
          </div>
          <Transaction
            id="01e4dsa"
            user="johndoe"
            date="2021-09-01"
            amount="$43.95"
          />
          <Transaction
            id="01e4dsa"
            user="johndoe"
            date="2021-09-01"
            amount="$43.95"
          />
          <Transaction
            id="01e4dsa"
            user="johndoe"
            date="2021-09-01"
            amount="$43.95"
          />
          <Transaction
            id="01e4dsa"
            user="johndoe"
            date="2021-09-01"
            amount="$43.95"
          />
          <Transaction
            id="01e4dsa"
            user="johndoe"
            date="2021-09-01"
            amount="$43.95"
          />
          <Transaction
            id="01e4dsa"
            user="johndoe"
            date="2021-09-01"
            amount="$43.95"
          />
          <Transaction
            id="01e4dsa"
            user="johndoe"
            date="2021-09-01"
            amount="$43.95"
          />
          <Transaction
            id="01e4dsa"
            user="johndoe"
            date="2021-09-01"
            amount="$43.95"
          />
          <Transaction
            id="01e4dsa"
            user="johndoe"
            date="2021-09-01"
            amount="$43.95"
          />
        </div>
        <div
          className="h-[300px] row-start-2 col-span-1 p-4"
          style={{ backgroundColor: colors.primary[400] }}
        >
          <p className="font-bold text-base">Campaigns</p>
          <PieChart />
        </div>
        <div
          className="max-h-[300px] row-start-2 col-span-1 p-4"
          style={{ backgroundColor: colors.primary[400] }}
        >
          <p className="font-bold text-base">Sales Quantity</p>
          <BarChart isDashboard={true} />
        </div>
        <div
          className="max-h-[300px] row-start-2 col-span-1 p-4"
          style={{ backgroundColor: colors.primary[400] }}
        >
          <p className="font-bold text-base">Geography Based Traffic</p>
          <GeoChart isDashboard={true} />
        </div>
      </div>
    </div>
  )
}
