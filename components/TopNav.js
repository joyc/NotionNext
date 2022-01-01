import BLOG from '@/blog.config'
import SideBarDrawer from '@/components/SideBarDrawer'
import { useGlobal } from '@/lib/global'
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { useRef } from 'react'
import SearchDrawer from './SearchDrawer'

/**
 * 顶部导航
 * @param {*} param0
 * @returns
 */
const TopNav = ({ tags, currentTag, post, posts, categories, currentCategory, autoHide = true }) => {
  const drawer = useRef()
  const { locale } = useGlobal()
  const searchDrawer = useRef()

  return (<div id='top-nav' className='sticky top-0 z-40'>
    {/* 侧面抽屉 */}
    <SideBarDrawer post={post} currentTag={currentTag} cRef={drawer} tags={tags} posts={posts} categories={categories} currentCategory={currentCategory}/>
    <SearchDrawer cRef={searchDrawer}/>

    {/* 导航栏 */}
    <div id='sticky-nav' className='flex animate__animated animate__fadeIn  w-full transform duration-500'>
      <div className='w-full flex justify-between items-center p-4 glassmorphism'>
        {/* 左侧LOGO 标题 */}
        <div className='flex flex-none flex-grow-0'>
          <div onClick={() => { drawer.current.handleSwitchSideDrawerVisible() }}
               className='w-8 cursor-pointer dark:text-gray-300'>
            <FontAwesomeIcon icon={faBars} size={'lg'}/>
          </div>

          <Link href='/' passHref>
            <a>
             <h1 className='cursor-pointer ml-2 w-full hover:scale-105 duration-200 transform font-serif dark:text-gray-200 whitespace-nowrap overflow-x-hidden'>{ BLOG.title }</h1>
            </a>
          </Link>
        </div>

        {/* 右侧功能 */}
        <div className='mr-1 flex flex-nowrap flex-grow justify-end items-center text-sm space-x-4 font-serif dark:text-gray-200'>
              <div className="cursor-pointer" onClick={() => { searchDrawer?.current?.show() }}>
              <FontAwesomeIcon icon={faSearch} className="mr-2" />
              {locale.NAV.SEARCH}
            </div>
        </div>
      </div>
    </div>

  </div>)
}

export default TopNav
