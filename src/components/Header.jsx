const Title = () => (
  <div className="title">
    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABJlBMVEX///9PJgM/AADh3dycVSdKHABEEAD/yj6Aa2HSQCe1qqWIdWu+tbFOJABLHwA5AABRIwBGFgD/00F1V0GqmY2ij3/w6+dwVEXKv7faQilAJABHIQC8raD/zj9OEwCqmIheOiJYMRLWzsZgOQ9eozxivUc/CgBBFQBIJQBTKQD49vSmNxz6xTxEGAAuAADHPiTuuji1iSiAWRiZg3J3Lg9hs0Ld1s+5OyCgNhqPMhaHSB6Vah1uTjWhdCDWpDHYpjF0ShGtfySUMxcqAABZeipqKgx1PReiWCnlszbGlSuNYhpiQSxCCAB+Yk5fPCaNdmVnQSBfKQlTThddmzlbhy9MMAhWZSFSTxZWaiJPOwxILAVYdSlSWRxqJQp/LhFlNA95UBR1XE/Jr4ZJAAAMl0lEQVR4nO2cDVvayBbHmeAE8XaGBCGCgIJRQoAICAWUF4NbFFCqrHVbt7vQ/f5f4p5JAtrWWnvv5Sb4zO/pY0nI4Pw5M+dlJtHn43A4HA6Hw+FwOBwOh8PhcDgcDofD4XA4HA6Hw+FwOBwOh8PhcDgcDmdBbM/tHiwZ5Qq9cokRkR7W3e7EMsmvU5WkX7PE+nt92MqmFbf7sTw2RLMYPsKhVytRGYudVKA8ktuvVaKfZrupQKBsipt5t/uyHKqiGg4EAqmimlVfp0TdgEHKJA7M7PVrHKh1gZ5aCgOBU1W+foVWrIpHZVtgIFXWhdc3F5Uto+KYECR2VaH62iTGdL27UBgIdHXjlUnMV7NHjwQGUqdEGLvdqf8pyo3We6wwEB7qQvQ1WTEmhoqBr6kQ/Aok5hXFFtHGZvgbhcUWDiVd7t9/R35vI3I9Hkc3YoovL2jDrwZpqlwxiZxZaYWxccbQjETC0MjW7q4sDR7rC1RMnBWjfrc7+V+QvxEMqT89bp5Np32qybT1aBqWezgrb+2udObm3zRQrVCKB8+mx4VCs5+jDwnNoKcacjuy0vp8+bYsMX3BUn8i5SaNYHObjixPEy53VFGQkqutz5fflBHTB8Tj8UZ/uxBvIq0HhdOgdSjirZX2Lwz/tYiatkBLZGlaCAaPEaqcdnRN3txYdfvFqpcJdBb8jum2rhq0HVvxIK9UdfChk0L8e4Xx6QTlEjdvVtuCsUuR9M/OnhIINApn/YTcXuVl71gmMWk0+5Pa0wrjzVqzmTPSqxvn81KiFqyh/nHjSYHBYGGSq5X6xubKDtRdUSo1cs3g0xa0vOrZdqNAyIbbPf0PUdq0GS81WQj8Mc1SfEpXc40m+ZtAUW57G/49B7sC0RBeQXdzjaWdnR2MEMI7Fpg4L+F/ap/agXetq4i8ggM1Kv5+u7//WZrgD/sWH+76GM7s397VEn/Yp25Jf/IXe+sexdzu769TF+7fHrz9vdbof3x7ALz9OGlMPsKLD3Kp9uctO3XwSWoc3+8fHNyirRV0p3WB3h68SzTihe13TM1nqRA8lkHsXa3UmNwz1bd/HgdL+NPbg894BRUmLyn0/Y7F+todmGmfHgfjBenTwe1OMxhs7rxjVpUgYBwn9t9+pHRzxYap0hawSe//mJQg6pUm92y4QvkUn97v//U3OzfNfTj4tNNgFePf92/vqCmHVmqdLXkp6pVTA1FWUpSYxd6hRrwB/7b/uj+LNwrx0uT32xyMUVDbxJ+pUW5RebwSZoztwo9rlDW7qbKaYCY8nsSD/bv74ziU9434JJcLxmsSzM7c/aQUr9Xgin6OmuFiRRbZSls+6e0sdU8KRfb0rN4JpALFljGNBxu53DQYJFM2MHO1YCF3DOW93i8Fj0kj3tzOnbFL2MpianBEhU2/KkheHq1KGhM9o5lDa4WpQvvB4EQ/J4V4owRGOz/PFYKFUqk/O8lN4yU4O5nNtkvB0jYdWCumPV1LUyJ6eYemmjV1QpxVtFRXh9Ipd77GLAZmnK2t6RJkome5k7XzHHMy08TaCZrGCwnTWXfrmpSaOn3jto4fkqR69xQbFWe5vmyS6QR0MYsFp/rJ2sUJjNHS9vna2trMmornFxfnicLU6MzXhTuGWa6IuleT1L202CmGW4beHaRSKejwiCJ0AnLOtwvNxMmFLWyqw//MdiVpxl7p/QlhC/zQYlDRs8Nw0dQuPTpO25paDAQGKtbNUeU0FQ5XDHR+YamYTCw1a2uoL51YL85JzVK/dpIg6mk4XOx2jlQdm2yFWBWibmt5kuqVOmC2GCJCDC2LjypdTGw5awlHIAzK2YX9cmZbFbQmzGHPNLKaQYhetj5Bp15cQX2DSMXeJBthvWUSzdB0PXFuCztxlIKexStHIFhTp5pm6KMjRHr2J3Synrqfz86ZlbQ4mu+THZJecTA8mmkGmlvsGWZIM8xOd1BuYbPo7LjNtLb94V6YkNFD6dqf991oqtW7crkYrtDDcioVhgCH0U8FniCjWwzD5cOsMUgVB0Vrs0YXqj6lfn2FPZDJrWOqieNrUbXurCibaqsy/GKMnI4mTn6mEGam/dXoeNTtjXR7162ip6vjkEauPFD7r8tfzKwooy+nYIhiB6aUpqqEDOEoVf6SOP/JML2Y4VEYQkW4YxBVh/lIh9AwNTSpLGpHatYLCrOV8GnHJEZW7w1OqTEcmTrGCax2uuViD89+ZsMEHsKkHc0wNaj6pdUzpOJpCxyrbvbK4SPBGwqZtYYjZgBTO2KhrdJSmXtURyOk/2SYniT01hdomtVHveEgEC6b8CGGoba64HW8o5DNuWK5o1M6s3JoOBj0TCmrYYKeV3hxTpCWzaqdIbiYlH3PCTXUYdnyqp5SaG3nmrjycPNBOHDaG6lORPwhM2S2hmUry3PuOTnSWvMjryksdowv5cAjoN8V4/mJeILAB39928mA0qHXFIZtukTrhr+hnNXXLp7hhJjFb9uAV52f84ZCbIRsNIS00DfAucSzIJL9tg1UJPNzVPSAwmhIWCKiB3KavH+peCEx5XA8x5Ln3UtYssDqMl3ni5CWW//7BYJcRl5fqkJlLLrOkmOkf8NtvLskvmIogpU4CjdRO+1Qbg5D9jquchk6rIJLwqFDZ2HXOQNNfrPWQeuHkHHu+WIh5yaTyGHo0H7KMr95GJrvPUXt1FRsu7TfpkiWxyFUlqKsc8ompRH7nS0qg7S8SuRd3+Mz0ES0FFZlJFfzvphE0kxh/oYS3V4C9rcpkZ0t/Qh1fkNWdyU5ZQpFZkSZyOxpnl9QWL8kRASPP1cYExF1bm3bSxMkOHpAIRWsX0BdWR9edLdKiJD8FYX5KiYYBu1cIbREc/eYhO9t3ipCrbvB8lVEZDe2FBdDzlfF+Dr/CwrraWobxVEYyxA6X+GOYoSw87AlU8gsm7+m1I1noR8U7ul0S/kFhVHsPN9kK8xfw7GzEZMfY0Koc2/NXCEzbMaFYfqg0N/Gl/WXK1RgXrUt72grTILA+SOy/hvaHuO0vUG6UBjLUN1dhTf4V2y4KyLRPm8r3MQkM/eVMQlfR7Fuh/RHCokbu8KPRykev1whXEckexgyhfW6SPB47kcisrybJM7nPFYouRAvHhSO8dUv+FIWA+zrmML3MTYLFwYaYzG2l3Ge6/aKQn9EtP4kwoPC/DMKcXRMyY2To4DCy+jlwpECN1So1y+x7Tk9oJBura+vX2JadXIacrlukSY/VEjSiCy6CwozaUhapHkoUMCeirKFVcuveEAhohhjipN2Xgpxm2AGJFs/VAj6IOBt2qdBITucOx44cUVuWPSQreHvBYUyFNwyEa0bJ5lC2SrBr+gzCiHNhBTF9v0xdkzpImUDN4vHLGuVqx5RKEf8/r2ITjGxcy9atVZR9p6Zh4ikx/hRtEC0DaPbiRbMelXrTyu1PaLQ9qVQGeDNl0YL8KMs4l/OIz50PbaI+OyypDVWrZnpGYW+JGWB+2UKKWQ/kJnZtRIopGNFgYIpY8WL+nvKIrsiIoENY+8orGdYj1+mkI3CpOwYDRRCQ8i2Ld/L/o4E0f8BXwxlWdJTClnV+oRCCG62x7DOiJFFExZXrCzMqS2gJiTWX+CJUMTcM/w0ql8rpKrLeenTCsd0nlHXLyl+81AfRqlly0V9OKboKmY5GoSZM5YRDF4vKdyDwRV7QmFVpv84CWjGnmBOExh1RM8/1PiQi88rTMsbQ0OYro+qJ53euLBU86Dw2qBPVU++2LxogKLe6uu8CVSBiKWyc4VWrrNnfVNzD8QaLirgKn3IzV1QqESwtcjwvUJwknQTFOQjGbvkXXwpSdEah3OFzLvSKCsU7UN72C9WMaA5ifz/BS7y0i2oFdiy0vcKfaCdvl9f/0cndG4rWyHkn8xKC4Ux+Iy2AoPTru6VMcbwnUEVklm3mrMK2xWFdl5K7Qd5n1AIEmXrEtmOd48GNkbgaxYKrbWo5CbF9oITxA82PkEhsZunXbkrWnE2gnA7YnkBpR0SFivCISdMJK9VQRDb0b15k0NbYUwQQqo/JoQk+50oHLcl4dCJn8mrkFRnJ61fsBlx6V7T+Wae8nCsfPvKl1ceHTy8Ye1B5tlP24Mozmc5/sR+Q/nmF3A4LyS27jZLzlD3dBm7i7zkhcUN2e097mU/E/36bQjz8F/usux56Ku/cZslh/96W3D5PgyhvVyJG1eue5olP4GhjJd6N+kLCI2XnMXNk0X34Gkqh8PhcDgcDofD4XA4HA6Hw+FwOBwOh8PhcDgcDofD4XA4HA6Hw+FwOBwOh8PhcDjL5t+zzyqaB0fkiwAAAABJRU5ErkJggg=="></img>
  </div>
);

const Header = () => (
  <div className="headerNav">
    <Title />
    <ul>
      <a href="/">
        <li>Home</li>
      </a>
      <a href="/">
        <li>About</li>
      </a>
      <a href="/">
        <li>Contact</li>
      </a>
      <a href="/">
        <li>Cart</li>
      </a>
    </ul>
  </div>
);

export default Header;