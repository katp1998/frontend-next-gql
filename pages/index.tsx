import { useLazyQuery, useQuery } from '@apollo/client'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import useAuth from '../hooks/useAuth'
import { GET_USER } from '../queries/userQueries'

export default function Home() {
  const router = useRouter();
  const {auth, setAuth} = useAuth();

  const {data, error} = useQuery(GET_USER, {
    context:{
      headers: {
        "Authorization" : `Bearer ${auth.accessToken}`
      }
    },
      onError({graphQLErrors}){
      console.log("error",graphQLErrors[0].message)
    }
  })
  
  return (
    <>
    <div>
        {auth.isLoggedIn ? (
          <h3>Welcome {data?.privateRouteResolver?.name as string}!</h3>
        ): (
          <h3>Welcome to homepage!</h3>
        )
      }
        
        
    </div>
    </>
  )
}
