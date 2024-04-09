(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{327:function(e,t,s){"use strict";s.r(t);var a=s(10),n=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"intel-nucs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#intel-nucs"}},[e._v("#")]),e._v(" Intel NUCS")]),e._v(" "),t("p",[e._v("This document covers all initial setup details for each NUC edge device in the distributed pointcloud stitching system.")]),e._v(" "),t("h2",{attrs:{id:"prerequisite"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#prerequisite"}},[e._v("#")]),e._v(" Prerequisite")]),e._v(" "),t("ol",[t("li",[e._v("Disable Secure Boot in UEFI (F2 hotkey at POST)")]),e._v(" "),t("li",[e._v("Enable Display Emulation under Advanced -> Video")]),e._v(" "),t("li",[e._v("An Internet Connection")])]),e._v(" "),t("h2",{attrs:{id:"intel-realsense"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#intel-realsense"}},[e._v("#")]),e._v(" Intel Realsense")]),e._v(" "),t("p",[e._v("Ensure that your kernel version ("),t("code",[e._v("uname -r")]),e._v(") is supported by the "),t("code",[e._v("librealsense-dkms")]),e._v(" package "),t("a",{attrs:{href:"https://github.com/IntelRealSense/librealsense/blob/master/doc/distribution_linux.md#using-pre-build-packages",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("p",[e._v("If not, please follow the following section on downgrading your kernel "),t("strong",[e._v("BEFORE")]),e._v(" installing "),t("code",[e._v("librealsense")]),e._v(".")]),e._v(" "),t("p",[e._v("Please install "),t("code",[e._v("librealsense")]),e._v(" from distribution following "),t("a",{attrs:{href:"https://iqr.cs.yale.edu/docs/computer-vision/intel-realsense.html",target:"_blank",rel:"noopener noreferrer"}},[t("code",[e._v("/computer-vision/intel-realsense.md")]),t("OutboundLink")],1),e._v(". Note the manual installation step required for NUCs only.")]),e._v(" "),t("h2",{attrs:{id:"kernel-downgrade"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#kernel-downgrade"}},[e._v("#")]),e._v(" Kernel Downgrade")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Install Mainline")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" apt-add-repository "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-y")]),e._v(" ppa:cappelikan/ppa\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt")]),e._v(" update\n\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" mainline\n")])])])])]),e._v(" "),t("li",[t("p",[e._v("Install the downgraded kernel via Mainline")])]),e._v(" "),t("li",[t("p",[e._v("Reboot and hold "),t("code",[e._v("Esc")]),e._v(" to access the GRUB menu")]),e._v(" "),t("p",[e._v("Hint: If you held "),t("code",[e._v("Esc")]),e._v(" for too long (which is very likely), you will enter the GRUB prompt instead. Execute "),t("code",[e._v("normal")]),e._v(", then tap "),t("code",[e._v("Esc")]),e._v(" until the menu shows up")])]),e._v(" "),t("li",[t("p",[e._v("Boot from the downgraded kernel in the Advanced Ubuntu Boot Options")])]),e._v(" "),t("li",[t("p",[e._v("Uninstall any newer kernels from Mainline so that Ubuntu boots to the downgraded kernel by default.")]),e._v(" "),t("p",[e._v("Hint: You may need to uninstall some "),t("code",[e._v("generic-hwe")]),e._v(" image/headers packages before this step. If this is the case, use")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("dpkg "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("--list")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("|")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("grep")]),e._v(" linux-image "),t("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# to find the exact package name of linux-image-xxx")]),e._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("sudo")]),e._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("apt-get")]),e._v(" purge linux-image-xxx\n")])])])])])]),e._v(" "),t("h2",{attrs:{id:"networking"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#networking"}},[e._v("#")]),e._v(" Networking")]),e._v(" "),t("p",[e._v("We establish "),t("strong",[t("code",[e._v("i")])]),e._v(" as the corresponding device number, indexed by 1.")]),e._v(" "),t("p",[e._v("Ensure that the ethernet cable is connected to a port with a native "),t("code",[e._v("Vision Subnet")]),e._v(" tag. For exact port mappings, please check the UniFi controller configuration. As of the time of writing, the top row of the 2.5Gbps ports are all natively tagged to the "),t("code",[e._v("Vision Subnet")])]),e._v(" "),t("h3",{attrs:{id:"ip-address-assignment"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ip-address-assignment"}},[e._v("#")]),e._v(" IP Address Assignment")]),e._v(" "),t("p",[e._v("The easiest way to configure manual IP assignment is through the Settings app. Please configure a wired IPv4 profile with the following specs:")]),e._v(" "),t("ul",[t("li",[e._v("IPv4 Method: Manual")]),e._v(" "),t("li",[e._v("Address: "),t("code",[e._v("192.168.2.[7 + i]")])]),e._v(" "),t("li",[e._v("Netmask: "),t("code",[e._v("255.255.255.0")])]),e._v(" "),t("li",[e._v("Gateway: "),t("code",[e._v("192.168.2.1")])])]),e._v(" "),t("h3",{attrs:{id:"hostname"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hostname"}},[e._v("#")]),e._v(" Hostname")]),e._v(" "),t("p",[e._v("For ease of access, please configure the hostname as necessary.")]),e._v(" "),t("blockquote",[t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("hostnamectl set-hostname iqr-vision-i\n")])])])]),e._v(" "),t("h2",{attrs:{id:"remote-access"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#remote-access"}},[e._v("#")]),e._v(" Remote Access")]),e._v(" "),t("h3",{attrs:{id:"ssh"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ssh"}},[e._v("#")]),e._v(" SSH")]),e._v(" "),t("p",[e._v("Please follow standard SSH key generation ("),t("code",[e._v("ssh-keygen")]),e._v(") and installation methods ("),t("code",[e._v("ssh-copy-id")]),e._v("). Since we have already set the hostname, it should be used as "),t("code",[e._v("iqr-vision-i.local")]),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"remote-desktop"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#remote-desktop"}},[e._v("#")]),e._v(" Remote Desktop")]),e._v(" "),t("p",[e._v("The remote desktop software of choice is RustDesk.")]),e._v(" "),t("p",[e._v("There are variety of reasons for this choice over AnyDesk but the following are the critical ones:")]),e._v(" "),t("ul",[t("li",[e._v("Virtual Display Compatibility\n"),t("ul",[t("li",[e._v("AnyDesk throws an Unsupported Display Server error under headless operation")])])]),e._v(" "),t("li",[e._v("Speed & Performance\n"),t("ul",[t("li",[e._v("RustDesk empirically displays significantly lower input latency and higher visual quality")])])])]),e._v(" "),t("h4",{attrs:{id:"installation-configuration"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation-configuration"}},[e._v("#")]),e._v(" Installation & Configuration")]),e._v(" "),t("ol",[t("li",[t("p",[e._v("Follow the "),t("a",{attrs:{href:"https://rustdesk.com/docs/en/client/linux/",target:"_blank",rel:"noopener noreferrer"}},[e._v("reference install steps"),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[e._v("Once installed, open RustDesk and set a permanent password under the Security tab")]),e._v(" "),t("p",[e._v("Hint: It is usually set to the "),t("code",[e._v("lab")]),e._v(" password but capatalized")])]),e._v(" "),t("li",[t("p",[t("a",{attrs:{href:"https://rustdesk.com/docs/en/client/linux/#login-screen",target:"_blank",rel:"noopener noreferrer"}},[e._v("Disable Wayland login"),t("OutboundLink")],1)])]),e._v(" "),t("li",[t("p",[e._v("Open Settings -> Display")])]),e._v(" "),t("li",[t("p",[e._v("Set the display scheme to Mirror Display")]),e._v(" "),t("p",[e._v("Hint: Setting the resolution now only impacts the virtual display (the RustDesk display) when headless")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);