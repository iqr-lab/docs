(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{325:function(e,t,s){"use strict";s.r(t);var a=s(10),n=Object(a.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"intel-realsense"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#intel-realsense"}},[e._v("#")]),e._v(" Intel RealSense")]),e._v(" "),t("h2",{attrs:{id:"installation"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#installation"}},[e._v("#")]),e._v(" Installation")]),e._v(" "),t("p",[e._v("For installation of the "),t("code",[e._v("librealsense2")]),e._v(" SDK on Ubuntu 22.04, please follow the "),t("a",{attrs:{href:"https://github.com/IntelRealSense/librealsense/blob/master/doc/installation.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("official documentation"),t("OutboundLink")],1),e._v(" for build and compilation from source.")]),e._v(" "),t("h2",{attrs:{id:"firmware-updates"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#firmware-updates"}},[e._v("#")]),e._v(" Firmware Updates")]),e._v(" "),t("p",[e._v("Use the "),t("code",[e._v("rs-fw-update")]),e._v(" binary installed with the librealsense2 SDK to update the firmware on the camera. For latest firmware downloads, please visit "),t("a",{attrs:{href:"https://dev.intelrealsense.com/docs/firmware-releases",target:"_blank",rel:"noopener noreferrer"}},[e._v("this page"),t("OutboundLink")],1),e._v(" and match the firmware with your specific RealSense model.")]),e._v(" "),t("p",[e._v("You can also use the GUI tool in "),t("code",[e._v("realsense-viewer")]),e._v(" to update the firmware.")]),e._v(" "),t("p",[e._v("If you are starting with a new camera, it is recommended to update the firmware to the latest version before beginning development.")]),e._v(" "),t("h2",{attrs:{id:"intel-realsense-deprecated-guide"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#intel-realsense-deprecated-guide"}},[e._v("#")]),e._v(" Intel RealSense [Deprecated Guide]")]),e._v(" "),t("del",[e._v("\nTo use any Intel RealSense camera with an IQRLab workstation, these specific instructions to install the librealsense2 SDK must be followed since the camera requires a patched kernel module to function properly.\n"),t("p",[e._v("As of the time of writing, kernel patching Ubuntu 22.04 (Kernel 6.32) has a few hoops that need to be jumped through.")]),e._v(" "),t("h3",{attrs:{id:"assumptions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#assumptions"}},[e._v("#")]),e._v(" Assumptions")]),e._v(" "),t("p",[e._v("Familiarity with the provided "),t("a",{attrs:{href:"https://github.com/IntelRealSense/librealsense/blob/development/doc/installation.md",target:"_blank",rel:"noopener noreferrer"}},[e._v("RealSense SDK Manual Linux Installation Instructions"),t("OutboundLink")],1),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"install-librealsense2-sdk"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-librealsense2-sdk"}},[e._v("#")]),e._v(" Install librealsense2 SDK")]),e._v(" "),t("ol",[t("li",[t("a",{attrs:{href:"https://dev.intelrealsense.com/docs/compiling-librealsense-for-linux-ubuntu-guide#install-dependencies",target:"_blank",rel:"noopener noreferrer"}},[e._v("Install all dependencies for Ubuntu 22.04."),t("OutboundLink")],1)]),e._v(" "),t("li",[e._v("Clone the "),t("a",{attrs:{href:"https://github.com/IntelRealSense/librealsense",target:"_blank",rel:"noopener noreferrer"}},[e._v("librealsense"),t("OutboundLink")],1),e._v(" repo."),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" clone https://github.com/IntelRealSense/librealsense.git\n")])])])]),e._v(" "),t("li",[e._v("Checkout the "),t("code",[e._v("development")]),e._v(" branch."),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" librealsense\n"),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("git")]),e._v(" checkout development\n")])])])]),e._v(" "),t("li",[e._v("Run Intel Realsense permissions script from "),t("code",[e._v("librealsense2")]),e._v(" root directory:"),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("./scripts/setup_udev_rules.sh\n")])])])]),e._v(" "),t("li",[e._v("Reboot the system into the UEFI:"),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("systemctl "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("reboot")]),e._v(" --firmware-setup\n")])])])]),e._v(" "),t("li",[e._v("Disable Secure Boot in the UEFI settings.")]),e._v(" "),t("li",[e._v("Build and apply patched kernel modules:"),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("./scripts/patch-realsense-ubuntu-lts-hwe.sh\n")])])])]),e._v(" "),t("li",[t("a",{attrs:{href:"https://dev.intelrealsense.com/docs/compiling-librealsense-for-linux-ubuntu-guide#building-librealsense2-sdk",target:"_blank",rel:"noopener noreferrer"}},[e._v("Build the librealsense2 SDK"),t("OutboundLink")],1),e._v(" "),t("blockquote",[t("p",[e._v("Use the following build command:")]),e._v(" "),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("cmake "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("..")]),e._v("/ "),t("span",{pre:!0,attrs:{class:"token parameter variable"}},[e._v("-DCMAKE_BUILD_TYPE")]),t("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("Release\n")])])])])]),e._v(" "),t("li",[e._v("Follow the instructions for compiling and installing the binaries\n"),t("blockquote",[t("p",[e._v("Tip: Use "),t("code",[e._v("-j15")]),e._v(" flag in "),t("code",[e._v("make")]),e._v(" commands for parallel compilation")])])])]),e._v(" "),t("h3",{attrs:{id:"install-librealsense2-python-wrapper"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#install-librealsense2-python-wrapper"}},[e._v("#")]),e._v(" Install librealsense2 Python Wrapper")]),e._v(" "),t("ol",[t("li",[e._v("There is no need to build the Python wrapper from source. Install the pre-built package with "),t("code",[e._v("pip")]),t("div",{staticClass:"language-sh extra-class"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[e._v("pip "),t("span",{pre:!0,attrs:{class:"token function"}},[e._v("install")]),e._v(" pyrealsense2\n")])])])])])])])}),[],!1,null,null,null);t.default=n.exports}}]);