import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { cn } from '../../lib/cn';
import { Button } from '../ui/Button';

interface InquiryForm {
  name: string;
  email: string;
  terrain: string;
  area: number;
}

type Status = 'idle' | 'submitting' | 'success' | 'error';

const terrains = ['Coastal', 'Alpine', 'Forest', 'Urban', 'Tundra', 'Volcanic'];

const fieldClass =
  'w-full border border-border bg-background px-4 py-3.5 text-sm text-foreground transition-colors duration-300 placeholder:text-muted-foreground focus:border-accent focus:outline-none';

export function Inquiry() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InquiryForm>();
  const [status, setStatus] = useState<Status>('idle');

  const onSubmit = async (data: InquiryForm) => {
    setStatus('submitting');
    try {
      const response = await fetch('/api/send-inquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      setStatus('success');
      reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="inquire" className="mx-auto max-w-[1400px] px-6 py-24 lg:px-12 lg:py-32">
      <div className="grid grid-cols-1 gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
        {/* Copy ------------------------------------------------------- */}
        <div>
          <p className="eyebrow">05 — Inquire</p>
          <h2 className="mt-5 text-4xl sm:text-5xl lg:text-[3.4rem]">
            Begin a commission.
          </h2>
          <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground sm:text-lg">
            Share your target terrain and scale. A studio engineer will respond within two
            working days with feasibility and a fabrication window.
          </p>

          <dl className="mt-12 space-y-6 border-t border-border pt-8 text-sm">
            <div className="flex justify-between gap-6">
              <dt className="uppercase tracking-[0.2em] text-muted-foreground">Fabrication node</dt>
              <dd className="font-serif">Lat 07°19'S / Long 110°24'E</dd>
            </div>
            <div className="flex justify-between gap-6">
              <dt className="uppercase tracking-[0.2em] text-muted-foreground">Response window</dt>
              <dd className="font-serif">2 working days</dd>
            </div>
            <div className="flex justify-between gap-6">
              <dt className="uppercase tracking-[0.2em] text-muted-foreground">System status</dt>
              <dd className="flex items-center gap-2 font-serif">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />
                Online
              </dd>
            </div>
          </dl>
        </div>

        {/* Form ------------------------------------------------------- */}
        <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-6">
          <div>
            <label htmlFor="name" className="mb-2 block text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">
              Client Entity / Name
            </label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              className={cn(fieldClass, errors.name && 'border-destructive')}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'name-error' : undefined}
              placeholder="Studio Meridian Ltd."
              {...register('name', { required: 'Please enter your name or entity.' })}
            />
            {errors.name ? (
              <p id="name-error" role="alert" className="mt-2 text-xs text-destructive">
                {errors.name.message}
              </p>
            ) : null}
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">
              Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              className={cn(fieldClass, errors.email && 'border-destructive')}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
              placeholder="you@studio.com"
              {...register('email', {
                required: 'Please enter an email address.',
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Please enter a valid email address.',
                },
              })}
            />
            {errors.email ? (
              <p id="email-error" role="alert" className="mt-2 text-xs text-destructive">
                {errors.email.message}
              </p>
            ) : null}
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <label htmlFor="terrain" className="mb-2 block text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">
                Target Terrain
              </label>
              <select
                id="terrain"
                defaultValue=""
                className={cn(fieldClass, 'appearance-none', errors.terrain && 'border-destructive')}
                aria-invalid={Boolean(errors.terrain)}
                aria-describedby={errors.terrain ? 'terrain-error' : undefined}
                {...register('terrain', { required: 'Please select a terrain.' })}
              >
                <option value="" disabled>
                  Select terrain
                </option>
                {terrains.map((terrain) => (
                  <option key={terrain} value={terrain}>
                    {terrain}
                  </option>
                ))}
              </select>
              {errors.terrain ? (
                <p id="terrain-error" role="alert" className="mt-2 text-xs text-destructive">
                  {errors.terrain.message}
                </p>
              ) : null}
            </div>

            <div>
              <label htmlFor="area" className="mb-2 block text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">
                Target Square Meters
              </label>
              <input
                id="area"
                type="number"
                min={40}
                className={cn(fieldClass, errors.area && 'border-destructive')}
                aria-invalid={Boolean(errors.area)}
                aria-describedby={errors.area ? 'area-error' : undefined}
                placeholder="250"
                {...register('area', {
                  required: 'Please enter a target size.',
                  valueAsNumber: true,
                  min: { value: 40, message: 'Minimum pod footprint is 40 m².' },
                })}
              />
              {errors.area ? (
                <p id="area-error" role="alert" className="mt-2 text-xs text-destructive">
                  {errors.area.message}
                </p>
              ) : null}
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-6 pt-2">
            <Button type="submit" variant="solid" disabled={status === 'submitting'}>
              {status === 'submitting' ? 'Transmitting…' : 'Submit Inquiry'}
            </Button>

            <div aria-live="polite" className="text-sm">
              {status === 'success' ? (
                <p className="text-accent">Inquiry received. A studio engineer will respond shortly.</p>
              ) : null}
              {status === 'error' ? (
                <p className="text-destructive">
                  Transmission failed. Please try again or email the studio directly.
                </p>
              ) : null}
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
