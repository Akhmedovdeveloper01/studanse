import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "../ui/table"

/**
 * @param {Object[]} columns
 * @param {Object[]} data
 */

export default function DataTable({columns=[], data=[]}) {
  if(!columns.length){
    <p></p>
  }
  return ( 
    <div>CustomTable</div>
  )
}
