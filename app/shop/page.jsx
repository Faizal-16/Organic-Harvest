import Shop from '@/components/ShopPage'
import React from 'react'

export const metadata = {
  title: "Shop Organic Products | OrganicHarvest",
  description: "Browse our selection of organic products",
};

const shop = () => {
  return (
    <div>
        <Shop />
    </div>
  )
}

export default shop