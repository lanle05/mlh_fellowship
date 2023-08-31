import jwtDecode from "jwt-decode";

export function withAuth(gssp:any) {
    return async (context:any) => {
        let token = context.req.cookies;
        let decoded:any = '';
        if(JSON.stringify(token) == '{}'){
            return {
                redirect: {
                    destination: '/sign-in'
                }
            }
        }else {
            decoded = jwtDecode(context.req.cookies.Jwttoken);
            let cat = decoded.user.category;
            const url = context.resolvedUrl;
            console.log(cat);
            const checkdata =  url.includes(cat);   
            if(!checkdata) {
                return {
                    redirect: {
                        destination: `/${cat}/userprofile`
                    }
                }
            }  
        }
        const gsspData = await gssp(context); // Run `getServerSideProps` to get page-specific data
        
        // Pass page-specific props along with user data from `withAuth` to component
        return {
            props: {
                ...gsspData.props,
                data:decoded.user
            }
        };
    }
}