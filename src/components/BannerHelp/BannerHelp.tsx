import styles from './styles.module.css'

interface BannerHelpProps{
  rightContent: JSX.Element;
  leftContent?: JSX.Element;
  action?: JSX.Element;
}

export const BannerHelp = ({ rightContent, leftContent, action }:BannerHelpProps)=>{
  return(
    <div className={styles.bannerContainerTheme}>
      <div className={styles.bannerContainer__content}>
        {rightContent}
        {leftContent}
      </div>
      {
        action && <div className={styles.bannerContainer__action}>
          {action}
        </div>
      }
    </div>
  )
}
