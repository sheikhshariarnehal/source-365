'use client';

import React from 'react';

export default function HeroIllustration({ className = '' }: { className?: string }) {
  return (
    <div className={`relative w-full h-full flex items-center justify-center select-none ${className}`}>
      <svg
        fill="none"
        height="100%"
        width="100%"
        viewBox="0 0 1200 1200"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-h-[220px] object-contain pointer-events-none"
      >
        <defs>
          <clipPath id="scaleup_clip_i0">
            <rect height="1200" width="1200" y="0" x="0" />
          </clipPath>
          <filter id="scaleup_filter_i1">
            <feColorMatrix values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 1 0" type="matrix" />
          </filter>
          <mask
            height="20000"
            width="20000"
            y="-10000"
            x="-10000"
            maskContentUnits="userSpaceOnUse"
            maskUnits="userSpaceOnUse"
            style={{ maskType: 'alpha' }}
            id="scaleup_mask_i2"
          >
            <g transform="matrix(1,0,0,1,0,0)">
              <g filter="url(#scaleup_filter_i1)" transform="matrix(1,0,0,1,600,600)">
                <g id="scaleup_i3" transform="matrix(1,0,0,1,-5,113)">
                  <path
                    fill="#ffa96e"
                    d="M483,-317C483,-317,-483,-317,-483,-317C-483,-317,-483,317,-483,317C-483,317,483,317,483,317C483,317,483,-317,483,-317Z"
                  />
                </g>
              </g>
            </g>
          </mask>
        </defs>

        <g transform="matrix(1,0,0,1,0,0)">
          <g clipPath="url(#scaleup_clip_i0)">
            <g mask="url(#scaleup_mask_i2)" transform="matrix(1,0,0,1,0,0)">
              <g>
                <g transform="translate(1436.946,995.918)">
                  <animateTransform
                    repeatCount="indefinite"
                    type="translate"
                    attributeName="transform"
                    dur="6s"
                    begin="0s"
                    calcMode="spline"
                    values="1436.946 995.918; -267.054 995.918"
                    keyTimes="0; 1"
                    keySplines="0 0 1 1"
                    fill="freeze"
                  />
                  <g transform="translate(-588.946,-995.918)">
                    <g transform="matrix(1,0,0,1,290.233,1004.899)">
                      <path
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="1.5"
                        stroke="#000000"
                        fill="#ff700f"
                        d="M-55.777,23.859C-55.777,23.859,-43.952,-23.859,2.062,-23.859C48.077,-23.859,55.776,23.566,55.776,23.566C55.776,23.566,-55.777,23.859,-55.777,23.859Z"
                      />
                    </g>
                    <g transform="matrix(1,0,0,1,801.029,995.918)">
                      <path
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="1.5"
                        stroke="#000000"
                        fill="#ff700f"
                        d="M-142.406,32.84C-142.406,32.84,-72.289,-32.841,20.664,-32.841C113.616,-32.841,142.406,32.84,142.406,32.84C142.406,32.84,-142.406,32.84,-142.406,32.84Z"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <g opacity="0">
                <animate
                  repeatCount="indefinite"
                  attributeName="opacity"
                  dur="6s"
                  begin="0s"
                  fill="freeze"
                  values="0; 1; 1"
                  keyTimes="0; 0.111111; 1"
                  keySplines="0 0 1 1; 0 0 1 1"
                  calcMode="spline"
                />
                <g transform="translate(536.176,494.16)">
                  <animateTransform
                    repeatCount="indefinite"
                    type="translate"
                    attributeName="transform"
                    dur="6s"
                    begin="0s"
                    calcMode="spline"
                    values="536.176 494.16; 224.176 494.16"
                    keyTimes="0; 1"
                    keySplines="0 0 1 1"
                    fill="freeze"
                  />
                  <path
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="1.5"
                    stroke="#1a1a1a"
                    fill="#ffffff"
                    d="M-102.314,29.821C-102.314,29.821,105.393,29.821,105.393,29.821C105.393,29.821,102.994,-10.626,57.408,-14.394C11.822,-18.162,1.54,4.787,1.54,4.787C1.54,4.787,-0.482,-29.821,-35.775,-29.399C-65.751,-29.041,-70.343,-1.438,-65.64,11.981C-77.595,-1.922,-105.394,2.671,-102.314,29.821Z"
                  />
                </g>
              </g>
              <g>
                <path
                  strokeDashoffset="-4"
                  strokeDasharray="93 7"
                  pathLength="100"
                  d="M245.241,645.72C245.241,645.72,329.57,645.72,329.57,645.72C329.57,645.72,245.241,645.72,245.241,645.72Z"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                  stroke="#1a1a1a"
                />
              </g>
              <g>
                <path
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                  stroke="#1a1a1a"
                  d="M286.287,633.789C286.287,633.789,341.491,633.789,341.491,633.789C341.491,633.789,286.287,633.789,286.287,633.789Z"
                />
              </g>
              <g>
                <path
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                  stroke="#1a1a1a"
                  d="M352.951,571.821C352.951,571.821,376.242,571.821,376.242,571.821C376.242,571.821,352.951,571.821,352.951,571.821Z"
                />
              </g>
              <g transform="matrix(1,0,0,1,0,-1)">
                <path
                  d="M995,1030C994.997,1030,423.929,1030,200.299,1030"
                  strokeWidth="1.5"
                  stroke="#000000"
                  fill="#ff700f"
                />
              </g>
            </g>
          </g>
        </g>

        <g transform="matrix(1,0,0,1,0,0)">
          <g clipPath="url(#scaleup_clip_i0)">
            {/* Rotating Wheels */}
            <g>
              <g transform="translate(547.024,915.465)">
                <g transform="rotate(0)">
                  <animateTransform
                    repeatCount="indefinite"
                    type="rotate"
                    attributeName="transform"
                    dur="6s"
                    begin="0s"
                    calcMode="spline"
                    values="0; 90; 195; 281; 360; 453; 558; 637; 720; 814; 919; 997; 1082; 1082"
                    keyTimes="0; 0.055556; 0.111111; 0.166667; 0.222223; 0.277778; 0.333333; 0.388889; 0.444444; 0.505555; 0.561111; 0.616666; 0.672222; 1"
                    keySplines="0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1"
                    fill="freeze"
                  />
                  <g transform="scale(1,1) translate(-547.024,-915.465)">
                    <g transform="matrix(1,0,0,1,543.836,960.344)">
                      <path
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        strokeWidth="1"
                        stroke="#1a1a1a"
                        fill="#ffffff"
                        d="M0,17.762C0,17.762,6.612,-44.637,6.612,-44.637C6.612,-44.637,1.214,-45.879,1.214,-45.879C1.214,-45.879,-6.237,20.379,-6.237,20.379C-6.237,20.379,0,17.762,0,17.762Z"
                      />
                    </g>
                  </g>
                </g>
              </g>
            </g>

            {/* Cyclist Dynamic Movement Group */}
            <g>
              <g transform="translate(466.416,668.758)">
                <g transform="rotate(66)">
                  <animateTransform
                    repeatCount="indefinite"
                    type="rotate"
                    attributeName="transform"
                    dur="6s"
                    begin="0s"
                    calcMode="spline"
                    values="66; 44; 28; 7.5; -5; 7; 27; 59; 69; 44; 28; 7.5; -5; 7; 27; 59; 69; 44; 28; 7.5; -5; 7; 27; 59; 69; 69"
                    keyTimes="0; 0.027778; 0.055556; 0.083333; 0.111111; 0.138889; 0.166667; 0.194444; 0.222223; 0.25; 0.277778; 0.305555; 0.333333; 0.361111; 0.388889; 0.416667; 0.444444; 0.477778; 0.505555; 0.533333; 0.561111; 0.588889; 0.616666; 0.644445; 0.672222; 1"
                    keySplines="0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1"
                    fill="freeze"
                  />
                  <g transform="scale(1,1) translate(-470.049,-668.497)">
                    <g>
                      <g transform="translate(609.733,688.429)">
                        <g transform="rotate(-90)">
                          <animateTransform
                            repeatCount="indefinite"
                            type="rotate"
                            attributeName="transform"
                            dur="6s"
                            begin="0s"
                            calcMode="spline"
                            values="-90; -42; -10; 5; 2; -21; -52; -95; -96; -42; -10; 5; 2; -21; -52; -95; -96; -42; -10; 5; 2; -21; -52; -95; -96; -96"
                            keyTimes="0; 0.027778; 0.055556; 0.083333; 0.111111; 0.138889; 0.166667; 0.194444; 0.222223; 0.25; 0.277778; 0.305555; 0.333333; 0.361111; 0.388889; 0.416667; 0.444444; 0.477778; 0.505555; 0.533333; 0.561111; 0.588889; 0.616666; 0.644445; 0.672222; 1"
                            keySplines="0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1"
                            fill="freeze"
                          />
                          <g transform="scale(1,1) translate(-608,-672.5)">
                            <g>
                              <g transform="translate(555.067,815.917)">
                                <g transform="rotate(24)">
                                  <animateTransform
                                    repeatCount="indefinite"
                                    type="rotate"
                                    attributeName="transform"
                                    dur="6s"
                                    begin="0s"
                                    calcMode="spline"
                                    values="24; 35; 32.5; 48; 24; 35; 32.5; 48; 24; 35; 32.5; 48; 24; 24"
                                    keyTimes="0; 0.055556; 0.111111; 0.166667; 0.222223; 0.277778; 0.333333; 0.388889; 0.444444; 0.505555; 0.561111; 0.616666; 0.672222; 1"
                                    keySplines="0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1; 0 0 1 1"
                                    fill="freeze"
                                  />
                                  <g transform="scale(1,1) translate(-514.999,-957.021)">
                                    <g transform="matrix(1,0,0,1,0,0)">
                                      <g transform="matrix(1,0,0,1,541.711,981.04)">
                                        <path
                                          strokeLinejoin="round"
                                          strokeLinecap="round"
                                          strokeWidth="1"
                                          stroke="#1a1a1a"
                                          fill="#1c0311"
                                          d="M-11.247,2.333C-11.247,2.333,-10.347,6.016,-10.347,6.016C-10.347,6.016,11.246,-1.392,11.246,-1.392C11.246,-1.392,11.23,-6.016,11.23,-6.016C11.23,-6.016,-11.247,2.333,-11.247,2.333Z"
                                        />
                                      </g>
                                    </g>
                                    <g transform="matrix(1,0,0,1,536.999,970.271)">
                                      <path
                                        strokeLinejoin="round"
                                        strokeLinecap="round"
                                        strokeWidth="1"
                                        stroke="#1a1a1a"
                                        fill="#ffffff"
                                        d="M-29.069,-8.198C-29.069,-8.198,-20.973,16.784,-20.973,16.784C-20.973,16.784,27.869,1.541,29.069,-0.513C21.186,-11.817,3.363,-10.916,-5.892,-8.198C-11.718,-8.05,-14.118,-16.784,-14.118,-16.784C-14.118,-16.784,-29.069,-8.198,-29.069,-8.198Z"
                                      />
                                    </g>
                                  </g>
                                </g>
                              </g>
                            </g>
                          </g>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>

            {/* Animated Wheels and Spokes */}
            <g transform="matrix(1,0,0,1,0,0)">
              <g>
                <g transform="translate(357.121,899.806)">
                  <g transform="rotate(0)">
                    <animateTransform
                      repeatCount="indefinite"
                      type="rotate"
                      attributeName="transform"
                      dur="6s"
                      begin="0s"
                      calcMode="spline"
                      values="0; 720; 720"
                      keyTimes="0; 0.994445; 1"
                      keySplines="0 0 1 1; 0 0 1 1"
                      fill="freeze"
                    />
                    <g transform="translate(-357.121,-899.806)">
                      <g transform="matrix(1,0,0,1,357.121,899.806)">
                        <path
                          strokeLinejoin="round"
                          strokeLinecap="round"
                          strokeWidth="1"
                          stroke="#1a1a1a"
                          fill="#1c0311"
                          fillRule="evenodd"
                          d="M0,-129.14C-71.371,-129.14,-129.226,-71.321,-129.226,0.004C-129.226,71.322,-71.371,129.14,0,129.14C71.37,129.14,129.225,71.322,129.225,0.004C129.225,-71.321,71.37,-129.14,0,-129.14ZM0,111.806C-61.786,111.806,-111.88,61.75,-111.88,0.004C-111.88,-61.75,-61.786,-111.805,0,-111.805C61.786,-111.805,111.88,-61.75,111.88,0.004C111.88,61.75,61.786,111.806,0,111.806Z"
                        />
                      </g>
                      <g>
                        <path strokeWidth="1" stroke="#1a1a1a" d="M289,933.5C289,933.5,291.5,946,316.5,965.5" />
                      </g>
                      <g>
                        <path strokeWidth="1" stroke="#1a1a1a" d="M267.5,914C267.5,914,272,941,288,960" />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
              <g>
                <g transform="translate(770.502,899.806)">
                  <g transform="rotate(0)">
                    <animateTransform
                      repeatCount="indefinite"
                      type="rotate"
                      attributeName="transform"
                      dur="6s"
                      begin="0s"
                      calcMode="spline"
                      values="0; 720; 720"
                      keyTimes="0; 0.994445; 1"
                      keySplines="0 0 1 1; 0 0 1 1"
                      fill="freeze"
                    />
                    <g transform="translate(-770.502,-899.806)">
                      <g transform="matrix(1,0,0,1,770.502,899.806)">
                        <path
                          strokeLinejoin="round"
                          strokeLinecap="round"
                          strokeWidth="1"
                          stroke="#1a1a1a"
                          fill="#1c0311"
                          fillRule="evenodd"
                          d="M-0.004,-129.14C-71.366,-129.14,-129.222,-71.321,-129.222,0.004C-129.222,71.322,-71.366,129.14,-0.004,129.14C71.367,129.14,129.222,71.322,129.222,0.004C129.222,-71.321,71.367,-129.14,-0.004,-129.14ZM-0.004,111.806C-61.789,111.806,-111.877,61.75,-111.877,0.004C-111.877,-61.75,-61.789,-111.805,-0.004,-111.805C61.789,-111.805,111.877,-61.75,111.877,0.004C111.877,61.75,61.789,111.806,-0.004,111.806Z"
                        />
                      </g>
                      <g>
                        <path strokeWidth="1" stroke="#1a1a1a" d="M829,837C829,837,849.5,860.5,852,886.5" />
                      </g>
                      <g>
                        <path strokeWidth="1" stroke="#1a1a1a" d="M786.76,823.155C786.76,823.155,810,830.5,823.5,854.5" />
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>

            {/* Bike Frame and Details */}
            <g transform="matrix(1,0,0,1,0,0)">
              <g transform="matrix(1,0,0,1,0,0)">
                <g transform="matrix(1,0,0,1,800.65,645.719)">
                  <path
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="1"
                    stroke="#000000"
                    fill="#ff700f"
                    d="M-29.176,9.337C-29.176,9.337,-21.734,-33.308,12.97,-34.078C32.507,-6.333,-0.667,34.078,-0.667,34.078C-0.667,34.078,-29.176,32.482,-29.176,32.482C-29.176,32.482,-32.506,14.732,-29.176,9.337Z"
                  />
                </g>
                <g transform="matrix(1,0,0,1,753.724,652.147)">
                  <path
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="1"
                    stroke="#000000"
                    fill="#ff700f"
                    d="M4.616,26.053C4.616,26.053,-21.593,2.786,-13.367,-26.053C21.594,-22.524,21.594,26.053,21.594,26.053C21.594,26.053,4.616,26.053,4.616,26.053Z"
                  />
                </g>
                <g transform="matrix(1,0,0,1,755.267,655.056)">
                  <path
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="1"
                    stroke="#1a1a1a"
                    d="M-10.54,-22.094C-10.54,-22.094,10.54,22.094,10.54,22.094C10.54,22.094,-10.54,-22.094,-10.54,-22.094Z"
                  />
                </g>
                <g transform="matrix(1,0,0,1,723.265,652.147)">
                  <path
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="1"
                    stroke="#1a1a1a"
                    fill="#ffffff"
                    d="M-23.524,-15.074C-23.524,-15.074,2.696,26.053,2.696,26.053C2.696,26.053,23.524,25.61,23.524,25.61C23.524,25.61,-5.273,-26.053,-5.273,-26.053C-5.273,-26.053,-23.524,-15.074,-23.524,-15.074Z"
                  />
                </g>
                <g transform="matrix(1,0,0,1,709.734,630.201)">
                  <path
                    strokeLinejoin="round"
                    strokeLinecap="round"
                    strokeWidth="1"
                    stroke="#1a1a1a"
                    fill="#ffffff"
                    d="M2.41,8.671C2.41,8.671,13.271,4.694,8.259,-4.107C3.246,-12.909,-13.271,0.835,-9.993,6.872C-6.716,12.909,2.346,3.275,2.346,3.275C2.346,3.275,2.41,8.671,2.41,8.671Z"
                  />
                </g>
              </g>

              {/* Rider and Seat structure */}
              <g transform="matrix(1,0,0,1,624.316,823.674)">
                <path
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="1"
                  stroke="#1a1a1a"
                  fill="#ffffff"
                  d="M63.779,-93.109C63.779,-93.109,-69.977,80.568,-69.977,80.568C-69.977,80.568,-61.619,93.108,-61.619,93.108C-61.619,93.108,69.977,-77.696,69.977,-77.696C69.977,-77.696,63.779,-93.109,63.779,-93.109Z"
                />
              </g>
              <g transform="matrix(1,0,0,1,502.049,804.054)">
                <path
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="1"
                  stroke="#1a1a1a"
                  fill="#ffffff"
                  d="M-52.29,-105.319C-52.29,-105.319,39.456,109.594,39.456,109.594C39.456,109.594,52.29,109.594,52.29,109.594C52.29,109.594,-42.023,-109.594,-42.023,-109.594C-42.023,-109.594,-52.29,-105.319,-52.29,-105.319Z"
                />
              </g>
              <g transform="matrix(1,0,0,1,547.209,913.647)">
                <path
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="1"
                  stroke="#1a1a1a"
                  fill="#1c0311"
                  d="M28.805,0C28.805,-15.898,15.909,-28.787,0,-28.787C-15.909,-28.787,-28.805,-15.898,-28.805,0C-28.805,15.898,-15.909,28.787,0,28.787C15.909,28.787,28.805,15.898,28.805,0Z"
                />
              </g>
              <g transform="matrix(1,0,0,1,714.334,775.667)">
                <path
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="1"
                  stroke="#1a1a1a"
                  fill="#ffffff"
                  d="M-55.711,-118.381C-55.711,-118.381,45.443,133.135,45.443,133.135C45.443,133.135,55.711,127.814,55.711,127.814C55.711,127.814,-51.914,-133.135,-51.914,-133.135C-51.914,-133.135,-55.711,-118.381,-55.711,-118.381Z"
                />
              </g>
              <g transform="matrix(1,0,0,1,456.176,705.101)">
                <path
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="1"
                  stroke="#1a1a1a"
                  fill="#1c0311"
                  d="M-45.775,-15.201C-41.35,0.028,-26.796,9.721,-7.843,17.007C-7.843,17.007,20.677,-6.935,20.677,-6.935C20.677,-6.935,45.774,-8.645,45.774,-8.645C45.774,-8.645,45.774,-17.007,45.774,-17.007C45.774,-17.007,-45.775,-15.201,-45.775,-15.201Z"
                />
              </g>
              <g transform="matrix(1,0,0,1,762.382,712.684)">
                <path
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="1"
                  stroke="#1a1a1a"
                  d="M-60.585,-36.655C-60.585,-36.655,-26.652,36.655,-26.652,36.655C-26.652,36.655,32.928,36.655,32.928,36.655C48.427,36.655,60.586,23.366,59.204,7.938C59.204,7.938,55.607,-32.195,55.607,-32.195C55.607,-32.195,-60.585,-36.655,-60.585,-36.655Z"
                />
              </g>
              <g transform="matrix(1,0,0,1,374.79,753.827)">
                <path
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="1"
                  stroke="#1a1a1a"
                  fill="#ffffff"
                  d="M-100.403,-4.488C-100.403,-4.488,96.572,-4.488,96.572,-4.488C96.572,-4.488,100.403,4.488,100.403,4.488C100.403,4.488,-99.717,4.488,-99.717,4.488C-99.717,4.488,-100.403,-4.488,-100.403,-4.488Z"
                />
              </g>
              <g transform="matrix(1,0,0,1,772.489,908.802)">
                <path
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="1"
                  stroke="#1a1a1a"
                  fill="#1c0311"
                  d="M16.452,-0.001C16.452,-9.081,9.086,-16.441,0,-16.441C-9.086,-16.441,-16.452,-9.081,-16.452,-0.001C-16.452,9.08,-9.086,16.441,0,16.441C9.086,16.441,16.452,9.08,16.452,-0.001Z"
                />
              </g>
              <g transform="matrix(1,0,0,1,357.121,908.802)">
                <path
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="1"
                  stroke="#1a1a1a"
                  fill="#1c0311"
                  d="M16.452,-0.001C16.452,-9.081,9.086,-16.441,0,-16.441C-9.086,-16.441,-16.452,-9.081,-16.452,-0.001C-16.452,9.08,-9.086,16.441,0,16.441C9.086,16.441,16.452,9.08,16.452,-0.001Z"
                />
              </g>
              <g transform="matrix(1,0,0,1,405.339,833.558)">
                <path
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="1"
                  stroke="#1a1a1a"
                  fill="#ffffff"
                  d="M-99.761,-75.243C-99.761,-75.243,-52.633,75.244,-52.633,75.244C-52.633,75.244,99.762,-5.185,99.762,-5.185C99.762,-5.185,94.902,-16.572,94.902,-16.572C94.902,-16.572,-45.606,59.816,-45.606,59.816C-45.606,59.816,-87.936,-75.243,-87.936,-75.243C-87.936,-75.243,-99.761,-75.243,-99.761,-75.243Z"
                />
              </g>
              <g>
                <path
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="1"
                  stroke="#1a1a1a"
                  d="M712.041,698.16C712.041,698.16,819.573,698.16,819.573,698.16C819.573,698.16,712.041,698.16,712.041,698.16Z"
                />
              </g>
              <g>
                <path
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="1"
                  stroke="#1a1a1a"
                  d="M722.081,719.853C722.081,719.853,819.573,719.853,819.573,719.853C819.573,719.853,722.081,719.853,722.081,719.853Z"
                />
              </g>
              <g transform="matrix(1,0,0,1,661.01,641.657)">
                <path
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="1"
                  stroke="#1a1a1a"
                  fill="#1c0311"
                  d="M6.899,14.183C6.899,14.183,18.337,-15.629,18.337,-15.629C18.337,-15.629,-17.994,-14.431,-17.994,-14.431C-17.994,-14.431,-18.336,-11.005,-16.452,-10.321C-14.567,-9.635,6.684,-9.464,6.684,-9.464C6.684,-9.464,-6.42,5.599,-2.386,15.629C-2.386,15.629,6.899,14.183,6.899,14.183Z"
                />
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}
