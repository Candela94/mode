





export const Button = ({variant='primary',children}) => {



    const btnClass = `btnClass ${variant ==='primary' ? 'primary-btn'   :  'secondaru-btn'}`
    return(

        <>
        
        <button className={btnClass}>{children}</button>
        
        </>



    )


}