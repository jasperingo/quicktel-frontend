import React from 'react';

export default function InputComponent(
  { label, type = 'text', id, value = '' }: 
  { label: string; type?: string, id: string, value?: string }
) {
  return (
    <div className="mb-4">
      <label htmlFor={id} className="block mb-2">{ label }</label>
      <input 
        id={id} 
        type={type} 
        defaultValue={value}
        className="w-full p-2 rounded-xl border border-cyan-600 outline-none" 
      />
    </div>
  );
}
